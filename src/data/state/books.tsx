/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:35:17 PM
 *  Last update: 7 Nov 2024, 1:26:26 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createContext, useContext, useMemo, useState } from "react";

import { Book } from "../firebase/config";
import { loadAllBooks } from "../firebase/read";
import { updateBook } from "../firebase/write";

type BooksUpdate = (newState: Book[]) => void;

type BooksState = {
    books?: Book[],
    borrowedBooks?: Book[],
    numCheckedOut?: number,
    updateBooks: BooksUpdate,
};

const defaultState: BooksState = {
    books: undefined,
    borrowedBooks: undefined,
    numCheckedOut: undefined,
    updateBooks: (_) => {},
};

const BooksContext = createContext<BooksState>(defaultState);

type Props = {
    children: JSX.Element | JSX.Element[],
};

export function BooksProvider({ children }: Props): JSX.Element {
    const [state, setState] = useState<BooksState>(defaultState);
    // memoize the borrowed list so we don't needlessly recalculate
    const borrowedBooks = useMemo<Book[] | undefined>(
        () => state.books?.filter((book) => book.checkedOut),
        [state.books]
    );
    // also memoize the number of checked out books
    const numCheckedOut = useMemo<number>(
        () => state.books?.filter((book) => book.checkedOut).length || 0,
        [state.books]
    );
    
    const updateBooks: BooksUpdate = (newState: Book[]) => {
        setState({ ...state, books: newState });
    };

    return (
        <BooksContext.Provider value={{ ...state, borrowedBooks, numCheckedOut, updateBooks }}>
            {children}
        </BooksContext.Provider>
    );
}

/**
 * Custom hook to get the books state from context.
 * @returns the current books state
 */
export function useBooks(): BooksState {
    return useContext<BooksState>(BooksContext);
}

/**
 * Retrieve from state or load the list of books.
 * @param booksState current books state from useBooks
 */
export async function getOrLoadBooks(booksState: BooksState): Promise<Book[]> {
    // if we already have books in state, no need to load
    if (booksState.books) {
        return booksState.books;
    }

    // otherwise, get from DB
    const books = await loadAllBooks();

    // if we get a response, update state
    if (books) {
        booksState.updateBooks(books);
    }

    // return the new list or an empty array if no response given
    return books || [];
}

/**
 * Check out the selected book, or return it if it's checked out.
 * Does not check number of books currently checked out.
 * @param id book ID
 * @param booksState current books state
 */
export async function toggleBookStatus(id: string, booksState: BooksState): Promise<boolean> {
    // can't update if no books
    if (!booksState.books || booksState.books.length === 0) {
        return false;
    }

    // copy current book list and find the index of the book to update
    const newBooks = booksState.books.slice();
    const bookIx = newBooks.findIndex((book) => book.id === id);

    // no book with matching ID found
    if (bookIx === -1) {
        return false;
    }

    // update book and state, assuming Firebase operation will succeed
    const newStatus = !newBooks[bookIx].checkedOut
    newBooks[bookIx].checkedOut = newStatus;
    booksState.updateBooks(newBooks);

    // run update in DB
    const success = await updateBook(id, { checkedOut: newStatus });

    // if operation failed, revert state
    if (!success) {
        newBooks[bookIx].checkedOut = !newStatus;
        booksState.updateBooks(newBooks);
    }

    return success;
}
/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:35:17 PM
 *  Last update: 7 Nov 2024, 12:00:53 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createContext, useContext, useState } from "react";

import { Book } from "../firebase/config";
import { loadAllBooks } from "../firebase/read";

type BooksUpdate = (newState: Book[]) => void;

type BooksState = {
    books?: Book[],
    updateBooks: BooksUpdate,
};

type Props = {
    children: JSX.Element | JSX.Element[],
};

const defaultState: BooksState = {
    books: undefined,
    updateBooks: (_) => {},
};

const BooksContext = createContext<BooksState>(defaultState);

export function BooksProvider({ children }: Props): JSX.Element {
    const [state, setState] = useState<BooksState>(defaultState);

    const updateBooks: BooksUpdate = (newState: Book[]) => {
        setState({ ...state, books: newState });
    };

    return (
        <BooksContext.Provider value={{ ...state, updateBooks }}>
            {children}
        </BooksContext.Provider>
    );
}

export function useBooks(): BooksState {
    return useContext<BooksState>(BooksContext);
}

/**
 * Retrieve from state or load the list of books.
 * @param booksState current books state from useBooks
 */
export async function getOrLoadBooks(booksState: BooksState): Promise<Book[]> {
    if (booksState.books) {
        console.log("getting books from state");
        return booksState.books;
    }

    console.log("getting books from db");
    const books = await loadAllBooks();

    if (books) {
        booksState.updateBooks(books);
    }

    return books || [];
}
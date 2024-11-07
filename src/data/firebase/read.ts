/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:47:44 PM
 *  Last update: 7 Nov 2024, 11:37:25 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { getDocs, query, collection, orderBy } from "firebase/firestore";

import { db, Book, booksCollection } from "./config";

/**
 * @returns all books in the database, sorted by title, or undefined if loading failed
 */
export async function loadAllBooks(): Promise<Book[] | undefined> {
    let books: Book[] = [];

    try {
        // get a snapshot of all books in the database, sorted by title
        const snapshot = await getDocs(
            query(
                collection(db, booksCollection),
                orderBy("title")
            )
        );

        // cast docs as Books and add to list
        snapshot.forEach((bookDoc) => {
            const newBook = bookDoc.data() as Book;
            newBook.id = bookDoc.id;
            books.push(newBook);
        });
    } catch (err) {
        // caught an error, log it and return undefined to indicate error
        console.error(`Error getting books:`, err);
        return undefined;
    }

    return books;
}
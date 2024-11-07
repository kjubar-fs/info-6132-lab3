/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:47:44 PM
 *  Last update: 7 Nov 2024, 12:10:46 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { getDocs, query, collection, orderBy } from "firebase/firestore";

import { db, Book, booksCollection } from "./config";

/**
 * @returns all books in the database, sorted by title
 */
export async function loadAllBooks(): Promise<Book[] | undefined> {
    let books: Book[] = [];

    try {
        const snapshot = await getDocs(
            query(
                collection(db, booksCollection),
                orderBy("title")
            )
        );

        snapshot.forEach((bookDoc) => {
            const newBook = bookDoc.data() as Book;
            newBook.id = bookDoc.id;
            books.push(newBook);
        });
    } catch (e) {
        console.error(e);
    }

    return books.length !== 0 ? books : undefined;
}
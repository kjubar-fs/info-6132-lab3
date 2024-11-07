/*
 *  Author: Kaleb Jubar
 *  Created: 7 Nov 2024, 11:24:28 AM
 *  Last update: 7 Nov 2024, 11:35:23 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { doc, updateDoc } from "firebase/firestore";

import { db, booksCollection, Book } from "./config";

/**
 * Update the specified book in the database.
 * @param id book ID
 * @param toUpdate properties of book to update
 */
export async function updateBook(id: string, toUpdate: Partial<Book>): Promise<boolean> {
    // use Partial for the update data so callers can pass partial objects

    // make a copy of the update data, deleting ID if it exists
    // we don't want to save ID to the database
    const data = { ...toUpdate };
    delete data.id;

    try {
        // do update
        await updateDoc(doc(db, booksCollection, id), data);

        // no errors caught, return true
        return true;
    } catch (err) {
        // caught an error, log it and return false
        console.error(`Error updating book ${id}:`, err);
        return false;
    }
}
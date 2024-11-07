/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 4:55:15 PM
 *  Last update: 6 Nov 2024, 7:09:06 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnddqCH5_2uHvUF1V3bPDyzF3R3RPb-1U",
    authDomain: "info6132-1207020.firebaseapp.com",
    projectId: "info6132-1207020",
    storageBucket: "info6132-1207020.firebasestorage.app",
    messagingSenderId: "145730657228",
    appId: "1:145730657228:web:b66bcbfef3ff3892e21b69"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const booksCollection = "books";

export type Book = {
    author: string,
    checkedOut: boolean,
    coverURL: string,
    description: string,
    rating: number,
    title: string,
};
/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 4:55:15 PM
 *  Last update: 7 Nov 2024, 2:16:59 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase app config
const firebaseConfig = {
    apiKey: "AIzaSyCnddqCH5_2uHvUF1V3bPDyzF3R3RPb-1U",
    authDomain: "info6132-1207020.firebaseapp.com",
    projectId: "info6132-1207020",
    storageBucket: "info6132-1207020.firebasestorage.app",
    messagingSenderId: "145730657228",
    appId: "1:145730657228:web:b66bcbfef3ff3892e21b69"
};

// initialize app and Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// constants/types for books data
export const booksCollection = "books";

export type Book = {
    id: string,
    author: string,
    checkedOut: boolean,
    coverURL: string,
    description: string,
    rating: number,
    title: string,
};
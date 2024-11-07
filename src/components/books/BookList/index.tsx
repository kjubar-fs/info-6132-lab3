/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:48:36 PM
 *  Last update: 7 Nov 2024, 11:07:14 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, FlatList, Text } from "react-native";

import { useBooks } from "../../../data/state/books";

import { BookListItem } from "./BookListItem";

import styles from "./styles";

interface Props {
    borrowedOnly?: boolean,
    disableNav?: boolean,
}

export function BookList({ borrowedOnly = false, disableNav = false }: Props) {
    const booksState = useBooks();
    const books = borrowedOnly ? booksState.borrowedBooks : booksState.books;

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={({ item }) => (
                    <BookListItem book={item} disableNav={disableNav} />
                )}
                keyExtractor={(book) => book.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                ListHeaderComponent={<Text style={styles.header}>All Books</Text>}
            />
        </View>
    );
}
/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:48:36 PM
 *  Last update: 7 Nov 2024, 1:07:28 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, FlatList, Text } from "react-native";

import { useBooks } from "../../../data/state/books";

import { BookListItem } from "./BookListItem";

import styles from "./styles";

interface Props {
    borrowedOnly?: boolean,
    disableNav?: boolean,
    showCheckOut?: boolean,
}

export function BookList({ borrowedOnly = false, disableNav = false, showCheckOut = false }: Props) {
    const booksState = useBooks();
    const books = borrowedOnly ? booksState.borrowedBooks : booksState.books;

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={({ item }) => (
                    <BookListItem book={item} disableNav={disableNav} showCheckOut={showCheckOut} />
                )}
                keyExtractor={(book) => book.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                ListHeaderComponent={<Text style={styles.header}>{borrowedOnly ? "Borrowed Books" : "All Books"}</Text>}
                ListEmptyComponent={
                    <Text style={styles.empty}>
                        No books found!
                        {borrowedOnly && " Try borrowing some from the list."}
                    </Text>
                }
            />
        </View>
    );
}
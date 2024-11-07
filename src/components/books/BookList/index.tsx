/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:48:36 PM
 *  Last update: 7 Nov 2024, 12:11:11 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, FlatList } from "react-native";

import { useBooks } from "../../../data/state/books";

import { BookListItem } from "./BookListItem";

import styles from "./styles";

interface Props {

}

export function BookList() {
    const books = useBooks().books;

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={({ item }) => (
                    <BookListItem book={item} />
                )}
                keyExtractor={(book) => book.id}
                showsVerticalScrollIndicator={false}
                style={styles.list}
            />
        </View>
    );
}
/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:48:36 PM
 *  Last update: 6 Nov 2024, 11:56:56 PM
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
                keyExtractor={(_, ix) => ix.toString()}
                showsVerticalScrollIndicator={false}
                style={styles.list}
            />
        </View>
    );
}
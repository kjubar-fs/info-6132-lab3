/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:17 AM
 *  Last update: 7 Nov 2024, 12:04:31 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Button, Text } from "react-native";

import { getOrLoadBooks, useBooks } from "../../data/state/books";

import { ScreenWrapper } from "../../components/common/ScreenWrapper";
import { BookList } from "../../components/books/BookList";

export function BookListScreen(): JSX.Element {
    const booksState = useBooks();

    return (
        <ScreenWrapper>
            <Text>Book list here</Text>
            <Button title="Load books" onPress={() => getOrLoadBooks(booksState)} />
            <BookList />
        </ScreenWrapper>
    );
}
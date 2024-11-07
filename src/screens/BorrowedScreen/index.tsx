/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 10:35:06 AM
 *  Last update: 7 Nov 2024, 12:40:15 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Text } from "react-native";

import { ScreenWrapper } from "../../components/common/ScreenWrapper";
import { BookList } from "../../components/books/BookList";

export function BorrowedScreen(): JSX.Element {
    return (
        <ScreenWrapper>
            <Text>Borrowed</Text>
            <BookList borrowedOnly disableNav />
        </ScreenWrapper>
    );
}
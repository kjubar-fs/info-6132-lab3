/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 10:35:06 AM
 *  Last update: 7 Nov 2024, 1:09:53 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { ScreenWrapper } from "../../components/common/ScreenWrapper";
import { BookList } from "../../components/books/BookList";

export function BorrowedScreen(): JSX.Element {
    return (
        <ScreenWrapper>
            <BookList borrowedOnly disableNav showCheckOut />
        </ScreenWrapper>
    );
}
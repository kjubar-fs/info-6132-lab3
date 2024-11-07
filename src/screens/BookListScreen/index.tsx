/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:17 AM
 *  Last update: 7 Nov 2024, 12:18:48 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { useEffect, useState } from "react";

import { getOrLoadBooks, useBooks } from "../../data/state/books";

import { ScreenWrapper } from "../../components/common/ScreenWrapper";
import { LoadingIndicator } from "../../components/common/LoadingIndicator";
import { BookList } from "../../components/books/BookList";

export function BookListScreen(): JSX.Element {
    const booksState = useBooks();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            await getOrLoadBooks(booksState);
            setLoading(false);
        })();
    }, []);

    return (
        <ScreenWrapper>
            {loading ?
                <LoadingIndicator /> :
                <BookList />}
        </ScreenWrapper>
    );
}
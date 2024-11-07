/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:17 AM
 *  Last update: 7 Nov 2024, 2:20:42 PM
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

    // load the books list when first opening this screen
    useEffect(() => {
        // run an async IIFE, since we need to await the result but effects can't directly be async
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
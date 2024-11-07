/*
 *  Author: Kaleb Jubar
 *  Created: 7 Nov 2024, 12:43:12 PM
 *  Last update: 7 Nov 2024, 12:48:20 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { TouchableHighlight, Text, ViewStyle } from "react-native";

import { Book } from "../../../data/firebase/config";
import { toggleBookStatus, useBooks } from "../../../data/state/books";

import styles from "./styles";

interface Props {
    book: Book,
    style?: ViewStyle,
}

export function CheckoutButton({ book, style }: Props): JSX.Element {
    const booksState = useBooks();

    return (
        <TouchableHighlight
            style={[
                styles.checkOut,
                { backgroundColor: book.checkedOut ? "#EE7777" : "#77EE77" },
                style,
            ]}
            onPress={() => { toggleBookStatus(book.id, booksState) }}
            underlayColor={book.checkedOut ? "#CC4444" : "#44CC44"}
        >
            <Text style={styles.checkOutText}>{book.checkedOut ? "Return" : "Check Out"}</Text>
        </TouchableHighlight>
    );
}
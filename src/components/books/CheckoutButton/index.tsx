/*
 *  Author: Kaleb Jubar
 *  Created: 7 Nov 2024, 12:43:12 PM
 *  Last update: 7 Nov 2024, 1:46:35 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { TouchableHighlight, Text, ViewStyle } from "react-native";

import { Book } from "../../../data/firebase/config";
import { toggleBookStatus, useBooks } from "../../../data/state/books";

import styles from "./styles";

type ButtonConfig = {
    backgroundColor: string,
    underlayColor: string,
    buttonText: string,
};

interface Props {
    book: Book,
    style?: ViewStyle,
}

export function CheckoutButton({ book, style }: Props): JSX.Element {
    const booksState = useBooks();
    const maxBooks = booksState.numCheckedOut >= 3;

    
    let action: (() => void) | undefined = () => {
        toggleBookStatus(book.id, booksState);
    };
    let buttonConfig: ButtonConfig = {
        backgroundColor: "#7E7",
        underlayColor: "#4C4",
        buttonText: "Check Out",
    };

    if (!book.checkedOut && maxBooks) {
        // no onPress action if we're at the max books already, effectively disabling the button
        action = undefined;
        // also set disabled config
        buttonConfig = {
            backgroundColor: "#CCC",
            underlayColor: "#CCC",
            buttonText: "Max Checked Out",
        };
    } else if (book.checkedOut) {
        buttonConfig = {
            backgroundColor: "#E77",
            underlayColor: "#C44",
            buttonText: "Return",
        };
    }

    return (
        <TouchableHighlight
            style={[
                styles.checkOut,
                { backgroundColor: buttonConfig.backgroundColor },
                style,
            ]}
            onPress={action}
            underlayColor={buttonConfig.underlayColor}
        >
            <Text style={styles.checkOutText}>{buttonConfig.buttonText}</Text>
        </TouchableHighlight>
    );
}
/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:26 AM
 *  Last update: 7 Nov 2024, 9:19:45 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../HomeScreen";

// generate prop types for the route object for this screen
type Props = NativeStackScreenProps<HomeStackParamList, "bookDetail">;

export function BookDetailScreen({ route }: Props): JSX.Element {
    const book = route.params.book;
    return (
        <>
            <Text>Book details for book {book.id} here</Text>
            <Text>{book.description.replaceAll("\\n", "\n")}</Text>
        </>
    );
}
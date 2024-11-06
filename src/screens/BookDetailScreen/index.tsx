/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:26 AM
 *  Last update: 6 Nov 2024, 12:10:30 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../HomeScreen";

// generate prop types for the route object for this screen
type Props = NativeStackScreenProps<HomeStackParamList, "bookDetail">;

export function BookDetailScreen({ route }: Props): JSX.Element {
    return (
        <Text>Book details for book {route.params.bookId} here</Text>
    );
}
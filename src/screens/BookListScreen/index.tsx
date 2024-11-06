/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:17 AM
 *  Last update: 6 Nov 2024, 12:10:21 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Button, Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../HomeScreen";
import { ScreenWrapper } from "../../components/common/ScreenWrapper";

// generate prop types for the navigation object for this screen
type Props = NativeStackScreenProps<HomeStackParamList, "bookList">;

export function BookListScreen({ navigation }: Props): JSX.Element {
    return (
        <ScreenWrapper>
            <Text>Book list here</Text>
            <Button onPress={() => navigation.navigate("bookDetail", { bookId: "1" })} title="Go to Detail" />
        </ScreenWrapper>
    );
}
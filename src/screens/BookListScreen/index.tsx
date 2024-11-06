/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:17 AM
 *  Last update: 6 Nov 2024, 11:18:42 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Button, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ScreenWrapper } from "../../components/common/ScreenWrapper";

export function BookListScreen(): JSX.Element {
    const nav = useNavigation();

    return (
        <ScreenWrapper>
            <Text>Book list here</Text>
            <Button onPress={() => nav.navigate("bookDetail" as never)} title="Go to Detail" />
        </ScreenWrapper>
    );
}
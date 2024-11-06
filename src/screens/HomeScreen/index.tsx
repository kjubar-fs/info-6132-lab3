/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 10:23:44 AM
 *  Last update: 6 Nov 2024, 11:19:12 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BookListScreen } from "../BookListScreen";
import { BookDetailScreen } from "../BookDetailScreen";

import { primaryColor } from "../../util/constants";

const Stack = createNativeStackNavigator();

export function HomeScreen(): JSX.Element {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="bookList"
                component={BookListScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="bookDetail"
                component={BookDetailScreen}
                options={{
                    headerTitle: "Book Details",
                    headerStyle: {
                        backgroundColor: primaryColor,
                    },
                    headerTintColor: "white",
                }}
            />
        </Stack.Navigator>
    );
}
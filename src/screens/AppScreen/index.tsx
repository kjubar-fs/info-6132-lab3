/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 9:47:58 AM
 *  Last update: 6 Nov 2024, 10:35:47 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../HomeScreen";
import { BorrowedScreen } from "../BorrowedScreen";

const Tab = createBottomTabNavigator();

export function AppScreen(): JSX.Element {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            
            <Tab.Screen
                name="Borrowed"
                component={BorrowedScreen}
            />
        </Tab.Navigator>
    );
}
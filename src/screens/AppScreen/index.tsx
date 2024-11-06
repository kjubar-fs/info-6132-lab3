/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 9:47:58 AM
 *  Last update: 6 Nov 2024, 10:52:20 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { HomeScreen } from "../HomeScreen";
import { BorrowedScreen } from "../BorrowedScreen";

const Tab = createBottomTabNavigator();

export function AppScreen(): JSX.Element {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 8,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }): JSX.Element => (
                        <Ionicons name="library" size={size} color={color} />
                    ),
                }}
            />
            
            <Tab.Screen
                name="Borrowed"
                component={BorrowedScreen}
                options={{
                    tabBarIcon: ({ color, size }): JSX.Element => (
                        <MaterialIcons name="library-books" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
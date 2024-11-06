/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 9:40:17 AM
 *  Last update: 6 Nov 2024, 10:45:07 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StatusBar } from 'expo-status-bar';

import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';

import { AppScreen } from './src/screens/AppScreen';
import { primaryColor } from './src/util/constants';

const BooksTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: primaryColor,
    },
}

export default function App() {
    return (
        <NavigationContainer theme={BooksTheme}>
            <StatusBar style="light" />

            <AppScreen />
        </NavigationContainer>
    );
}

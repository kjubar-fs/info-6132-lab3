/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 9:40:17 AM
 *  Last update: 7 Nov 2024, 2:22:11 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StatusBar } from 'expo-status-bar';

import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';

import { BooksProvider } from './src/data/state/books';

import { AppScreen } from './src/screens/AppScreen';

import { primaryColor } from './src/util/constants';

// create a custom theme for React Navigation
const BooksTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: primaryColor,
        background: "#FEFEFE",
    },
}

export default function App() {
    return (
        <NavigationContainer theme={BooksTheme}>
        <BooksProvider>

            <StatusBar style="light" />

            <AppScreen />

        </BooksProvider>
        </NavigationContainer>
    );
}

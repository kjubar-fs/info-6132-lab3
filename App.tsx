/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 9:40:17 AM
 *  Last update: 6 Nov 2024, 10:38:27 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import { AppScreen } from './src/screens/AppScreen';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />

            <AppScreen />
        </NavigationContainer>
    );
}

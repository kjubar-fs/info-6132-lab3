/*
 *  Author: Kaleb Jubar
 *  Created: 7 Nov 2024, 12:13:37 AM
 *  Last update: 
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, ActivityIndicator } from "react-native";

import styles from "./styles";

export function LoadingIndicator(): JSX.Element {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}
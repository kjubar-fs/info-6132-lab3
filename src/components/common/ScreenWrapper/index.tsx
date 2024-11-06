/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 10:16:55 AM
 *  Last update: 6 Nov 2024, 10:26:11 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleProp, ViewStyle, View } from "react-native";

import styles from "./styles";

interface Props {
    contentContainerStyle?: StyleProp<ViewStyle>,
    children?: JSX.Element | JSX.Element[],
}

export function ScreenWrapper({ contentContainerStyle, children }: Props): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.statusBar}/>
            <View style={[styles.contentContainer, contentContainerStyle]}>
                {children}
            </View>
        </View>
    );
}
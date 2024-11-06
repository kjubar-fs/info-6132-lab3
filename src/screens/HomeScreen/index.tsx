/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 10:23:44 AM
 *  Last update: 6 Nov 2024, 10:33:58 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Text } from "react-native";

import { ScreenWrapper } from "../../components/common/ScreenWrapper";

export function HomeScreen(): JSX.Element {
    return (
        <ScreenWrapper contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Home</Text>
        </ScreenWrapper>
    );
}
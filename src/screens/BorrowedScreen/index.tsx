/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 10:35:06 AM
 *  Last update: 
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Text } from "react-native";

import { ScreenWrapper } from "../../components/common/ScreenWrapper";

export function BorrowedScreen(): JSX.Element {
    return (
        <ScreenWrapper contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Borrowed</Text>
        </ScreenWrapper>
    );
}
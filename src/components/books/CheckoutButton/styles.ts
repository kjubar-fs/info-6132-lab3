/*
 *  Author: Kaleb Jubar
 *  Created: 7 Nov 2024, 12:43:49 PM
 *  Last update: 
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import { lightDropShadowStyle } from "../../../util/constants";

export default StyleSheet.create({
    checkOut: {
        position: "absolute",
        bottom: 20,
        right: 20,
        padding: 10,
        borderRadius: 15,

        ...lightDropShadowStyle,
    },

    checkOutText: {
        fontSize: 15,
        fontWeight: "600",
    },
});
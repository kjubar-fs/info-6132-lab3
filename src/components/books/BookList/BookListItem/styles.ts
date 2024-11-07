/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 2:26:57 PM
 *  Last update: 30 Oct 2024, 12:04:43 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        gap: 5,
        padding: 2,

        borderRadius: 5,
    },

    flatContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    rowContainer: {
        flexGrow: 1,
    },

    disclosure: {
        padding: 5,
        paddingLeft: 10,
    },

    name: {
        fontWeight: "500",
        color: "#222",
    },

    source: {
        fontSize: 13,
        fontWeight: "300",
        color: "#444",
    },

    date: {
        fontSize: 13,
        fontWeight: "300",
    },
});
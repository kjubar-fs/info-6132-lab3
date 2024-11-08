/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 2:26:57 PM
 *  Last update: 7 Nov 2024, 1:01:08 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        padding: 0,
    },

    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        padding: 10,

        borderRadius: 5,
    },

    contentContainer: {
        flex: 1,
        gap: 5,
    },

    actionItems: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        paddingLeft: 10,
        gap: 10
    },

    title: {
        fontWeight: "500",
        color: "#222",
        fontSize: 17,
    },

    author: {
        fontSize: 15,
        fontWeight: "300",
    },
});
/*
 *  Author: Kaleb Jubar
 *  Created: 7 Nov 2024, 9:24:25 AM
 *  Last update: 7 Nov 2024, 10:06:06 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    innerContainer: {
        alignItems: "center",
        padding: 20,
        gap: 30,
    },

    detailContainer: {
        alignItems: "center",
        gap: 6,
    },

    title: {
        fontSize: 30,
        fontWeight: "500",
        textAlign: "center",
    },

    author: {
        fontSize: 17,
        fontWeight: "300",
        fontStyle: "italic",
    },

    coverImage: {
        height: 350,
        width: "100%",
        resizeMode: "contain",
    },

    descriptionContainer: {
        alignItems: "center",
        gap: 15,
    },

    description: {
        fontSize: 18,
        textAlign: "justify",
    },

    ratingContainer: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        alignSelf: "flex-start",
    },

    stars: {
        flexDirection: "row",
    },

    rating: {
        fontSize: 16,
        fontWeight: "300",
        fontStyle: "italic",
        color: "#222",
    },
});
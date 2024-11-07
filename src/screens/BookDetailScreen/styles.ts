/*
 *  Author: Kaleb Jubar
 *  Created: 7 Nov 2024, 9:24:25 AM
 *  Last update: 7 Nov 2024, 12:35:26 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import { lightDropShadowStyle } from "../../util/constants";

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    innerContainer: {
        alignItems: "center",
        padding: 20,
        paddingBottom: 70,
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
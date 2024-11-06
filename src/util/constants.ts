/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 10:22:29 AM
 *  Last update: 6 Nov 2024, 10:40:10 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Platform } from "react-native";

export const safeAreaPadding = Platform.OS === "ios" ? 60 : 50;

export const primaryColor = "#948033";
export const accentColor = "#DCCE80";
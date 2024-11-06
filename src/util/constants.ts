/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 10:22:29 AM
 *  Last update: 
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Platform } from "react-native";

export const safeAreaPadding = Platform.OS === "ios" ? 60 : 50;
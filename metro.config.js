/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:23:11 AM
 *  Last update: 6 Nov 2024, 11:24:43 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push('cjs');

module.exports = config;

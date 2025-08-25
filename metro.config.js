/*
 * @Author: test
 * @Date: 2025-08-23 22:53:16
 * @LastEditTime: 2025-08-25 15:49:37
 * @FilePath: /react-native-template-obytes/metro.config.js
 * @Description:
 */
/* eslint-env node */

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Get the default Expo metro config
const config = getDefaultConfig(__dirname);

// Configure SVG transformer
const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
};

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
};

// Apply NativeWind configuration and export
module.exports = withNativeWind(config, { input: './global.css' });

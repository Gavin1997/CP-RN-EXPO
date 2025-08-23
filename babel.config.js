/*
 * @Author: test
 * @Date: 2025-08-22 16:58:28
 * @LastEditTime: 2025-08-23 00:38:53
 * @FilePath: /react-native-template-obytes/babel.config.js
 * @Description:
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
      { include: ['@ui-kitten/components'] },
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@env': './src/lib/env.js',
            '@assets': './assets',
          },
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};

/*
 * @Author: test
 * @Date: 2025-08-23 22:53:16
 * @LastEditTime: 2025-08-25 17:22:25
 * @FilePath: /react-native-template-obytes/lint-staged.config.js
 * @Description:
 */
module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => [
    `npx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  'src/translations/*.(json)': (filenames) => [
    `npx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],
};

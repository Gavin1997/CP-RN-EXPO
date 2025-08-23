/*
 * @Author: test
 * @Date: 2025-08-22 16:58:28
 * @LastEditTime: 2025-08-22 17:19:40
 * @FilePath: /react-native-template-obytes/src/lib/i18n/resources.ts
 * @Description:
 */
import ar from '@/translations/ar.json';
import en from '@/translations/en.json';
import zh from '@/translations/zh.json';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  zh: {
    translation: zh,
  },
};

export type Language = keyof typeof resources;

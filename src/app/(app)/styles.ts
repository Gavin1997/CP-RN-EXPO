/*
 * @Author: test
 * @Date: 2025-08-25 18:18:32
 * @LastEditTime: 2025-08-26 15:03:13
 * @FilePath: /react-native-template-obytes/src/app/(app)/styles.ts
 * @Description:
 */
import { Platform, StyleSheet } from 'react-native';

export const tabLayoutStyles = StyleSheet.create({
  tabBarStyle: {
    height: 75,
    paddingBottom: 8,
    borderTopWidth: 0,
    backgroundColor: 'transparent',

    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
      },
      android: {
        backgroundColor: 'transparent',
        elevation: 0,
      },
    }),
  },
  tabBarLabelStyle: {
    fontSize: 12,
  },
});

export const tabBarOptions = {
  tabBarLabelStyle: tabLayoutStyles.tabBarLabelStyle,
  tabBarStyle: tabLayoutStyles.tabBarStyle,
  tabBarActiveTintColor: '#333',
  tabBarActiveTintFontWeight: '500' as const,
};

export const styles = StyleSheet.create({});

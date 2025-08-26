/*
 * @Author: test
 * @Date: 2025-08-25 22:07:05
 * @LastEditTime: 2025-08-26 15:01:20
 * @FilePath: /react-native-template-obytes/src/components/ui/layout/screen-wrapper.tsx
 * @Description:
 */
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

import { FocusAwareStatusBar } from '@/components/ui';
type ScreenWrapperProps = {
  children: React.ReactNode;
  withBackground?: boolean;
  backgroundSource?: any;
  statusBarHidden?: boolean;
  withSafeArea?: boolean;
  scrollable?: boolean;
};

export function ScreenWrapper({
  children,
  withBackground = true,
  backgroundSource = require('@assets/images/app_bg.png'),
  statusBarHidden = false,
}: ScreenWrapperProps) {
  const tabBarHeight = useBottomTabBarHeight();
  if (withBackground) {
    return (
      <ImageBackground
        source={backgroundSource}
        style={styles.container}
        resizeMode="cover"
      >
        <FocusAwareStatusBar hidden={statusBarHidden} />

        {children}
      </ImageBackground>
    );
  }

  return (
    <>
      <FocusAwareStatusBar hidden={statusBarHidden} />
      {children}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});

/*
 * @Author: test
 * @Date: 2025-08-25 22:07:05
 * @LastEditTime: 2025-08-25 23:42:28
 * @FilePath: /react-native-template-obytes/src/components/ui/layout/screen-wrapper.tsx
 * @Description:
 */
import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

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

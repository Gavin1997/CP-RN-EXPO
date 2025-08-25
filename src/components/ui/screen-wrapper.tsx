/*
 * @Author: test
 * @Date: 2025-08-25 22:07:05
 * @LastEditTime: 2025-08-25 22:52:08
 * @FilePath: /react-native-template-obytes/src/components/ui/screen-wrapper.tsx
 * @Description:
 */
import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FocusAwareStatusBar } from './focus-aware-status-bar';

type ScreenWrapperProps = {
  children: React.ReactNode;
  withBackground?: boolean;
  backgroundSource?: any;
  statusBarHidden?: boolean;
  withSafeArea?: boolean;
};

export function ScreenWrapper({
  children,
  withBackground = true,
  backgroundSource = require('@assets/images/app_bg.png'),
  statusBarHidden = false,
  withSafeArea = true,
}: ScreenWrapperProps) {
  const content = withSafeArea ? (
    <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
  ) : (
    <View style={styles.container}>{children}</View>
  );

  if (withBackground) {
    return (
      <ImageBackground
        source={backgroundSource}
        style={styles.container}
        resizeMode="cover"
      >
        <FocusAwareStatusBar hidden={statusBarHidden} />
        {content}
      </ImageBackground>
    );
  }

  return (
    <>
      <FocusAwareStatusBar hidden={statusBarHidden} />
      {content}
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
});

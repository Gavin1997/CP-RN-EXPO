import React from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

type SafeAreaViewProps = {
  children: React.ReactNode;
  className?: string;
  style?: any;
  edges?: ('top' | 'right' | 'bottom' | 'left')[];
};

export function SafeAreaView({
  children,
  className,
  style,
  edges = ['top', 'right', 'left'],
}: SafeAreaViewProps) {
  if (Platform.OS === 'web') {
    // For web, use a regular View with appropriate padding
    const webStyle = {
      paddingTop: edges.includes('top') ? 20 : 0,
      paddingRight: edges.includes('right') ? 16 : 0,
      paddingBottom: edges.includes('bottom') ? 20 : 0,
      paddingLeft: edges.includes('left') ? 16 : 0,
      ...style,
    };

    return (
      <View className={className} style={webStyle}>
        {children}
      </View>
    );
  }

  // For mobile platforms, use the native SafeAreaView
  return (
    <RNSafeAreaView className={className} style={style} edges={edges}>
      {children}
    </RNSafeAreaView>
  );
}

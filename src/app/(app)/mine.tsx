/*
 * @Author: test
 * @Date: 2025-08-24 00:00:49
 * @LastEditTime: 2025-08-25 16:38:22
 * @FilePath: /react-native-template-obytes/src/app/(app)/mine.tsx
 * @Description:
 */
import Info from '@assets/svg/info.svg';
import React from 'react';

import { Text, View } from '@/components/ui';

export default function Home() {
  return (
    <View className="flex-1 ">
      <Text>fucking mine</Text>
      <Info className="size-10" />
    </View>
  );
}

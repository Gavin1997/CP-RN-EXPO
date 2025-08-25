/*
 * @Author: test
 * @Date: 2025-08-24 00:00:49
 * @LastEditTime: 2025-08-25 22:17:49
 * @FilePath: /react-native-template-obytes/src/app/(app)/mine.tsx
 * @Description:
 */

import * as React from 'react';

import { Buttons } from '@/components/buttons';
import { Colors } from '@/components/colors';
import { Inputs } from '@/components/inputs';
import { Typography } from '@/components/typography';
import { SafeAreaView, ScreenWrapper, ScrollView, Text } from '@/components/ui';

export default function Mine() {
  return (
    <ScreenWrapper>
      <ScrollView className="px-4">
        <Text>我的页面</Text>
      </ScrollView>
    </ScreenWrapper>
  );
}

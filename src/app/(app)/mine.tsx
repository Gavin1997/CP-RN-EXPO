/*
 * @Author: test
 * @Date: 2025-08-24 00:00:49
 * @LastEditTime: 2025-08-26 14:17:14
 * @FilePath: /react-native-template-obytes/src/app/(app)/mine.tsx
 * @Description:
 */

import * as React from 'react';

import { Buttons } from '@/components/buttons';
import { Colors } from '@/components/colors';
import { Inputs } from '@/components/inputs';
import { Typography } from '@/components/typography';
import { SafeAreaView, ScrollView, View } from '@/components/ui';
import { ScreenWrapper } from '@/components/ui/layout/screen-wrapper';

export default function Mine() {
  return (
    <ScreenWrapper>
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1">
          <Typography />
          <Colors />
          <Buttons />
          <Inputs />
        </SafeAreaView>
      </ScrollView>
    </ScreenWrapper>
  );
}

/*
 * @Author: test
 * @Date: 2025-08-24 00:00:49
 * @LastEditTime: 2025-08-25 23:51:33
 * @FilePath: /react-native-template-obytes/src/app/(app)/mine.tsx
 * @Description:
 */

import * as React from 'react';

import { usePosts } from '@/api';
import { Buttons } from '@/components/buttons';
import { Colors } from '@/components/colors';
import { Inputs } from '@/components/inputs';
import { Typography } from '@/components/typography';
import { SafeAreaView, ScrollView, View } from '@/components/ui';
import { ErrorWrapper } from '@/components/ui/layout/error-warpper';
import { ScreenWrapper } from '@/components/ui/layout/screen-wrapper';

export default function Mine() {
  const { isError } = usePosts();

  if (true) {
    return <ErrorWrapper />;
  }
  return (
    <ScreenWrapper scrollable>
      <ScrollView className="px-4 pb-20">
        <SafeAreaView className="flex-1 pb-20">
          <Typography />
          <Colors />
          <Buttons />
          <Inputs />
        </SafeAreaView>
      </ScrollView>
    </ScreenWrapper>
  );
}

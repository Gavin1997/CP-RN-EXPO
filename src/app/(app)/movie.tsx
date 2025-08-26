/*
 * @Author: test
 * @Date: 2025-08-23 23:49:25
 * @LastEditTime: 2025-08-26 14:17:18
 * @FilePath: /react-native-template-obytes/src/app/(app)/movie.tsx
 * @Description:初始路由，当你打开应用或导航到 Web 应用的根 URL 时，它将首先显示。
 */

import React from 'react';

import { usePosts } from '@/api';
import { SafeAreaView, ScrollView, Text } from '@/components/ui';
import { ErrorWrapper } from '@/components/ui/layout/error-wrapper';
import { ScreenWrapper } from '@/components/ui/layout/screen-wrapper';
export default function Movie() {
  const { isError } = usePosts();

  if (isError) {
    return <ErrorWrapper />;
  }

  return (
    <ScreenWrapper>
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1">
          <Text>影视页面内容</Text>
        </SafeAreaView>
      </ScrollView>
    </ScreenWrapper>
  );
}

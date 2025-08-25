/*
 * @Author: test
 * @Date: 2025-08-23 23:49:25
 * @LastEditTime: 2025-08-25 22:05:02
 * @FilePath: /react-native-template-obytes/src/app/(app)/info.tsx
 * @Description:初始路由，当你打开应用或导航到 Web 应用的根 URL 时，它将首先显示。
 */

import React from 'react';

import { usePosts } from '@/api';
import { ScreenWrapper, Text } from '@/components/ui';

export default function Info() {
  const { isError } = usePosts();

  if (isError) {
    return (
      <ScreenWrapper>
        <Text> Error Loading data </Text>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      {/* TODO: 添加实际的内容列表 */}
      <Text>资讯页面内容</Text>
    </ScreenWrapper>
  );
}

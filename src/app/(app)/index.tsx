/*
 * @Author: test
 * @Date: 2025-08-23 23:49:25
 * @LastEditTime: 2025-08-26 15:07:37
 * @FilePath: /react-native-template-obytes/src/app/(app)/index.tsx
 * @Description:初始路由，当你打开应用或导航到 Web 应用的根 URL 时，它将首先显示。
 */

import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { type Post, usePosts } from '@/api';
import { Card } from '@/components/card';
import { EmptyList, Input, SafeAreaView, View } from '@/components/ui';
import { Search } from '@/components/ui/icons';
import { ErrorWrapper } from '@/components/ui/layout/error-wrapper';
import { ScreenWrapper } from '@/components/ui/layout/screen-wrapper';
export default function Index() {
  const { data, isPending, isError } = usePosts();
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => <Card {...item} />,
    []
  );

  return (
    <ScreenWrapper>
      <View className="p-4">
        <Input
          placeholder="搜索内容..."
          leftIcon={<Search />}
          variant="frosted"
        />
      </View>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      />
    </ScreenWrapper>
  );
}

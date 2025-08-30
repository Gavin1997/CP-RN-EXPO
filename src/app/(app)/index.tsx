/*
 * @Author: test
 * @Date: 2025-08-23 23:49:25
 * @LastEditTime: 2025-08-30 11:20:20
 * @FilePath: /RNCP/src/app/(app)/index.tsx
 * @Description:初始路由，当你打开应用或导航到 Web 应用的根 URL 时，它将首先显示。
 */

import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { type Post, usePosts } from '@/api';
import { Card } from '@/components/card';
import { EmptyList, Input, SafeAreaView } from '@/components/ui';
import { Search } from '@/components/ui/icons';
import { ScreenWrapper } from '@/components/ui/layout/screen-wrapper';

export default function Index() {
  const { data, isPending } = usePosts();

  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => <Card {...item} />,
    []
  );

  return (
    <ScreenWrapper>
      <SafeAreaView style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <Input
          placeholder="搜索内容..."
          leftIcon={<Search />}
          variant="frosted"
        />
      </SafeAreaView>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300} // 适配后的预估高度
      />
    </ScreenWrapper>
  );
}

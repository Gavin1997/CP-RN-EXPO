/*
 * @Author: test
 * @Date: 2025-08-25 23:47:40
 * @LastEditTime: 2025-08-26 14:17:49
 * @FilePath: /react-native-template-obytes/src/components/ui/layout/error-wrapper.tsx
 * @Description:
 */
import { Link } from 'expo-router';

import { Text, View } from '@/components/ui';

import { ScreenWrapper } from './screen-wrapper';

export function ErrorWrapper() {
  return (
    <ScreenWrapper>
      <View className="flex-1 items-center justify-center p-4">
        <Text className="mb-4 text-2xl font-bold">发生错误了</Text>
        <Link href="/" className="mt-4">
          <Text className="text-blue-500 underline">回到主页!</Text>
        </Link>
      </View>
    </ScreenWrapper>
  );
}

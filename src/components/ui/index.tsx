/*
 * @Author: test
 * @Date: 2025-08-23 23:49:25
 * @LastEditTime: 2025-08-26 15:24:28
 * @FilePath: /react-native-template-obytes/src/components/ui/index.tsx
 * @Description:
 */
import { cssInterop } from 'nativewind';
import Svg from 'react-native-svg';

export * from './animated-tab-icon';
export * from './button';
export * from './checkbox';
export { default as colors } from './colors';
export * from './focus-aware-status-bar';
export * from './image';
export * from './input';
export * from './list';
export * from './modal';
export * from './progress-bar';
export * from './safe-area-view';
export * from './select';
export * from './tab-icon';
export * from './text';
export * from './utils';

// export base components from react-native
export {
  ActivityIndicator,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
// SafeAreaView is now exported from ./safe-area-view

//Apply cssInterop to Svg to resolve className string into style
cssInterop(Svg, {
  className: {
    target: 'style',
  },
});

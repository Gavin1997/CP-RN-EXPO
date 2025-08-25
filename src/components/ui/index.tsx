/*
 * @Author: test
 * @Date: 2025-08-23 23:49:25
 * @LastEditTime: 2025-08-25 23:35:08
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
export { SafeAreaView } from 'react-native-safe-area-context';

//Apply cssInterop to Svg to resolve className string into style
cssInterop(Svg, {
  className: {
    target: 'style',
  },
});

/*
 * @Author: test
 * @Date: 2025-08-24 00:09:35
 * @LastEditTime: 2025-08-25 18:10:08
 * @FilePath: /react-native-template-obytes/src/components/ui/animated-tab-icon.tsx
 * @Description:
 */
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type AnimatedTabIconProps = {
  IconComponent: React.ComponentType<{ color: string }>;
  color: string;
  focused: boolean;
};

export function AnimatedTabIcon({
  IconComponent,
  color,
  focused,
}: AnimatedTabIconProps) {
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);
  const prevFocused = React.useRef(focused);

  React.useEffect(() => {
    // 只有当从未激活状态变为激活状态时才触发动画
    if (focused && !prevFocused.current) {
      // 每次激活时重置旋转值，然后开始新的动画
      rotate.value = 0;
      // 橡皮筋拉伸效果 - 轻微放大然后回到正常
      rotate.value = withSpring(15, {
        damping: 8,
        stiffness: 150,
      });
      scale.value = withSpring(1.1, {
        damping: 8,
        stiffness: 150,
      });

      // 动画完成后回到正常状态
      setTimeout(() => {
        rotate.value = withSpring(0, {
          damping: 10,
          stiffness: 100,
        });
        scale.value = withSpring(1, {
          damping: 10,
          stiffness: 100,
        });
      }, 200);
    } else if (!focused) {
      // 未激活时保持正常状态
      rotate.value = withTiming(0, { duration: 300 });
      scale.value = withTiming(1, { duration: 200 });
    }

    prevFocused.current = focused;
  }, [focused, rotate, scale]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }, { scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedIconStyle}>
      <IconComponent color={color} />
    </Animated.View>
  );
}

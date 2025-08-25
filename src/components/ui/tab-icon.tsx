/*
 * @Author: test
 * @Date: 2025-08-25 17:11:29
 * @LastEditTime: 2025-08-25 18:13:12
 * @FilePath: /react-native-template-obytes/src/components/ui/tab-icon.tsx
 * @Description:
 */
import React from 'react';
import type { SvgProps } from 'react-native-svg';

import { AnimatedTabIcon } from './animated-tab-icon';

type TabIconProps = {
  ActiveIcon: React.ComponentType<SvgProps>;
  InactiveIcon: React.ComponentType<SvgProps>;
  focused: boolean;
  activeColor?: string;
  inactiveColor?: string;
};

export function TabIcon({
  ActiveIcon,
  InactiveIcon,
  focused,
  activeColor = '#007AFF',
  inactiveColor = '#8E8E93',
}: TabIconProps) {
  const IconComponent = focused ? ActiveIcon : InactiveIcon;
  const color = focused ? activeColor : inactiveColor;

  return <IconComponent color={color} />;
}

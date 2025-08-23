import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function User({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 14c-5 0-9 4-9 9v1h18v-1c0-5-4-9-9-9Z"
        fill={color}
      />
    </Svg>
  );
}

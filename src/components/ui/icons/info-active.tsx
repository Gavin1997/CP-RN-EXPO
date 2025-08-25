/*
 * @Author: test
 * @Date: 2025-08-25 17:11:11
 * @LastEditTime: 2025-08-25 23:17:32
 * @FilePath: /react-native-template-obytes/src/components/ui/icons/info-active.tsx
 * @Description:
 */
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

export function InfoActive({ color = '#A4E83D', ...props }: SvgProps) {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <Rect
        x="4"
        y="4"
        width="16"
        height="22"
        rx="2"
        fill="url(#paint0_linear_42_310)"
      />
      <Path
        d="M17.0352 3C19.3998 3.00023 21.3232 4.94212 21.3232 7.3291V10.9023H24.0811C25.7467 10.9023 27.1021 12.2699 27.1006 13.9512V23.2734C27.1006 25.3273 25.4439 27 23.4092 27H20.5879L20.5801 26.998C20.579 26.9984 20.5758 26.9999 20.5732 27H7.00781C4.85308 26.9999 3.10059 25.2307 3.10059 23.0557V7.3291C3.10059 4.94212 5.02399 3.00024 7.38867 3H17.0352ZM7.35254 5C5.81468 5.00014 5 5.94909 5 7.5V23.2266C5 24.567 5.68142 25 7.00781 25H19V7.3291C19 5.77656 18.5366 5 17 5H7.35254ZM21 13L20.998 25H23.4092C24.6171 25 25 24.7193 25 23.5V14.1787C25 13.332 24.9184 13 24.0811 13H21ZM16.1621 17.8936C16.5761 17.8936 16.9121 18.2296 16.9121 18.6436C16.912 19.0574 16.576 19.3936 16.1621 19.3936H8.61133C8.19748 19.3935 7.86146 19.0574 7.86133 18.6436C7.86133 18.2296 8.19741 17.8936 8.61133 17.8936H16.1621ZM16.1621 11.5361C16.576 11.5361 16.912 11.8722 16.9121 12.2861C16.9121 12.7001 16.5761 13.0361 16.1621 13.0361H8.61133C8.19741 13.036 7.86133 12.7001 7.86133 12.2861C7.86143 11.8723 8.19747 11.5362 8.61133 11.5361H16.1621Z"
        fill="#333333"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_42_310"
          x1="12"
          y1="4"
          x2="12"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A4E83D" />
          <Stop offset="1" stopColor="#CFF04D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

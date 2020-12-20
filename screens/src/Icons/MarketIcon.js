import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Path,
} from 'react-native-svg';

function MarketIcon() {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      width={62}
      height={62}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 62"
    >
      <Defs>
        <LinearGradient
          id="prefix__linear-gradient"
          x1={68.87}
          y1={42.92}
          x2={68.87}
          y2={41.92}
          gradientTransform="matrix(6 0 0 -14 -394 628.5)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#47bfee" />
          <Stop offset={1} stopColor="#74cbee" />
        </LinearGradient>
        <LinearGradient
          id="prefix__linear-gradient-2"
          x1={68.87}
          y1={48.95}
          x2={68.87}
          y2={47.95}
          gradientTransform="matrix(6 0 0 -20 -382 1000.5)"
          xlinkHref="#prefix__linear-gradient"
        />
        <LinearGradient
          id="prefix__linear-gradient-3"
          x1={59.24}
          y1={52.19}
          x2={59.24}
          y2={51.19}
          gradientTransform="matrix(7 0 0 -26 -372 1372.5)"
          xlinkHref="#prefix__linear-gradient"
        />
      </Defs>
      <G id="prefix__\uADF8\uB8F9_105" data-name="\uADF8\uB8F9 105">
        <Rect
          id="prefix__\uC0AC\uAC01\uD615_1467"
          data-name="\uC0AC\uAC01\uD615 1467"
          x={16.21}
          y={27.59}
          width={6}
          height={14}
          rx={1}
          fill="url(#prefix__linear-gradient)"
        />
        <Rect
          id="prefix__\uC0AC\uAC01\uD615_1468"
          data-name="\uC0AC\uAC01\uD615 1468"
          x={28.21}
          y={21.59}
          width={6}
          height={20}
          rx={1}
          fill="url(#prefix__linear-gradient)"
        />
        <Rect
          id="prefix__\uC0AC\uAC01\uD615_1469"
          data-name="\uC0AC\uAC01\uD615 1469"
          x={39.21}
          y={15.59}
          width={7}
          height={26}
          rx={1}
          fill="url(#prefix__linear-gradient)"
        />
        <G id="prefix__\uADF8\uB8F9_104" data-name="\uADF8\uB8F9 104">
          <Path
            fill="#000000"
            id="prefix__\uD328\uC2A4_1149"
            data-name="\uD328\uC2A4 1149"
            d="M47.28 45L19 45.39a.5.5 0 00-.5.52.49.49 0 00.48.5l28.28-.35a.5.5 0 00.5-.52.47.47 0 00-.15-.35.51.51 0 00-.33-.19z"
          />
          <Path
            fill="#000000"
            id="prefix__\uD328\uC2A4_1150"
            data-name="\uD328\uC2A4 1150"
            className="prefix__cls-4"
            d="M29.35 42.19a1.09 1.09 0 00.71.3l4.25-.07a1.38 1.38 0 001.17-1.51l-.13-16.21a1.67 1.67 0 00-.48-1.22 1 1 0 00-.72-.3l-4.25.07a1.38 1.38 0 00-1.17 1.51L28.87 41a1.74 1.74 0 00.48 1.19zm.55-18.42l4.26-.07c.39 0 .66.48.67 1L35 40.87c0 .55-.3 1-.66 1l-4.28.13c-.39 0-.66-.48-.67-1l-.14-16.17c0-.54.29-1 .65-1z"
          />
          <Path
            fill="#000000"
            id="prefix__\uD328\uC2A4_1151"
            data-name="\uD328\uC2A4 1151"
            className="prefix__cls-4"
            d="M40.67 42.18a.87.87 0 00.59.24l4.25-.1c.66 0 1.17-.9 1.16-2l-.14-22.12a2.45 2.45 0 00-.6-1.74.82.82 0 00-.59-.24l-4.25.1c-.66 0-1.18.9-1.17 2l.14 22.13a2.49 2.49 0 00.61 1.73zM40.82 17l.12-.18 4.59-.1.13.18a2 2 0 01.34 1.31l.14 22.1a2.08 2.08 0 01-.37 1.32l-.12.17-4.59.11-.06-.18a2.08 2.08 0 01-.37-1.32l-.14-22.09a2.1 2.1 0 01.33-1.32z"
          />
          <Path
            fill="#000000"
            id="prefix__\uD328\uC2A4_1152"
            data-name="\uD328\uC2A4 1152"
            className="prefix__cls-4"
            d="M24.28 41l-.1-11a1.7 1.7 0 00-.48-1.22 1 1 0 00-.71-.3l-4.26.07A1.39 1.39 0 0017.55 30l.1 11a1.71 1.71 0 00.48 1.22 1 1 0 00.71.3l4.27-.07A1.38 1.38 0 0024.28 41zm-1.18 1h-4.26c-.38 0-.66-.48-.66-1l-.1-11c0-.55.3-1 .65-1l4.27-.08a.94.94 0 01.67 1l.1 11c0 .55-.3 1-.66 1z"
          />
        </G>
      </G>
    </Svg>
  );
}

export default MarketIcon;

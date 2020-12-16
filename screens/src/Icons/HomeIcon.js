import React from 'react';
import Svg, {
  Path, Defs, G, Text,
} from 'react-native-svg';

const HomeIcon = ({ color = '#080040' }) => (
  <Svg
    viewBox="0 0 31 35"
    width={35}
    height={35}
  >
    <Defs />
    <G id="prefix__\uADF8\uB8F9_116" data-name="\uADF8\uB8F9 116">
      <G id="prefix__\uADF8\uB8F9_13" data-name="\uADF8\uB8F9 13">
        <G id="prefix__Container">
          <Text
            fill={color}
            transform="translate(1.47 33)"
            style={{
              isolation: 'isolate',
            }}
            fontSize={8}
            fontFamily="Avenir-Medium,Avenir"
            fontWeight={500}
            letterSpacing=".02em"
            id="prefix___Label"
            data-name="Label"
          >
            메인 화면
          </Text>
        </G>
      </G>
      <G id="prefix__shop">
        <Path
          id="prefix__Path"
          stroke={color}
          className="prefix__cls-3"
          d="M8.57 12.7v8h14.7v-8"
        />
        <Path
          id="prefix__Path-2"
          stroke={color}
          className="prefix__cls-3"
          d="M25.92 8a3 3 0 01-3 2.67 3.06 3.06 0 01-2.32-1.14 3 3 0 01-2.34 1.14 3 3 0 01-2.34-1.14 3 3 0 01-2.34 1.14 3 3 0 01-2.33-1.14 3.15 3.15 0 01-2.34 1.14A3 3 0 015.92 8l4-6h12z"
        />
        <Path
          id="prefix__Path-3"
          stroke={color}
          d="M13.92 20.7v-5.33h4v5.33"
          fill="none"
          strokeMiterlimit={10}
        />
      </G>
    </G>
  </Svg>
);

export default HomeIcon;

import React from 'react';
import Svg, {
  Path, G, Text,
} from 'react-native-svg';

const HomeIcon = ({ color = '#080040' }) => (
  <Svg
    data-name="\uB808\uC774\uC5B4 1"
    viewBox="0 0 31 35"
    width={35}
    height={35}
  >
    <G data-name="\uADF8\uB8F9 11">
      <Text
        transform="translate(1 32.97)"
        style={{
          isolation: 'isolate',
        }}
        fontSize={8}
        fill={color}
        fontFamily="Avenir-Medium,Avenir"
        fontWeight={500}
        letterSpacing=".02em"
        data-name="Label"
      >
        채팅 목록
      </Text>
    </G>
    <Path
      data-name="\uD328\uC2A4 108"
      d="M7.5 1h15.84a1.59 1.59 0 011.58 1.59v11.05a1.58 1.58 0 01-1.58 1.58h-7.92L10.67 20v-4.78H7.5a1.58 1.58 0 01-1.58-1.58V2.56A1.59 1.59 0 017.5 1z"
      fill="none"
      stroke={color}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default HomeIcon;

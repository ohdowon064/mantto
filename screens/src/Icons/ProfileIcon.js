import React from 'react';
import Svg, {
  Defs, G, Text, Path, Circle,
} from 'react-native-svg';

const ProfileIcon = ({ color = '#080040' }) => (
  <Svg
    width={35}
    height={35}
    id="prefix__\uB808\uC774\uC5B4_1"
    data-name="\uB808\uC774\uC5B4 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 35"
  >
    <Defs />
    <G id="prefix__\uADF8\uB8F9_12" data-name="\uADF8\uB8F9 12">
      <G id="prefix__single-03">
        <Path
          id="prefix__Path"
          className="prefix__cls-5"
          d="M5.67 20a8.7 8.7 0 018.7-8.7h1.74a8.71 8.71 0 018.7 8.7"
          stroke={color}
        />
        <Circle
          id="prefix__Oval"
          className="prefix__cls-5"
          stroke={color}
          cx={15.23}
          cy={6.08}
          r={5.22}
        />
      </G>
      <G id="prefix__Container">
        <Text
          transform="translate(-3 32)"
          style={{
            isolation: 'isolate',
          }}
          fontSize={8}
          fill={color}
          fontFamily="Avenir-Medium,Avenir"
          fontWeight={500}
          letterSpacing=".02em"
          id="prefix___Label"
          data-name="Label"
        >
          마이페이지
        </Text>
      </G>

    </G>
  </Svg>
);

export default ProfileIcon;

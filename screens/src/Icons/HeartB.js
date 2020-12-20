import React from 'react';
import Svg, {
  Defs, LinearGradient, Stop, G, Path,
} from 'react-native-svg';

function HeartB() {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 62"
      width={62}
      height={62}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={16.17}
          y1={50.84}
          x2={16.17}
          y2={49.84}
          gradientTransform="matrix(27.36 0 0 -23.02 -415.36 1194.66)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#74cbee" />
          <Stop offset={1} stopColor="#45b6e8" />
        </LinearGradient>
      </Defs>
      <G data-name="\uADF8\uB8F9 807">
        <Path
          d="M40.68 32.09v-.4A7.57 7.57 0 0027 27.6a7.57 7.57 0 00-13.63 3.7v.8a7.52 7.52 0 00.7 3.17C16.74 43 27 47.51 27 47.51S39.72 42.29 40.63 33a6.73 6.73 0 00.05-.91z"
          fill="url(#prefix__a)"
        />
        <Path
          data-name="\uD328\uC2A4 1144"
          d="M33 46.36l-.12-.06c-.13-.06-13.13-6.33-16.59-16.79a11.09 11.09 0 01-.89-4.4v-1.35c.63-5.36 4.72-9.23 9.81-9.23a9.72 9.72 0 017.76 4 9.72 9.72 0 017.76-4c5.34 0 9.57 4.28 9.87 10a1.79 1.79 0 010 .4v.24a10.14 10.14 0 01-.07 1.23C49.45 39 33.25 46.23 33.09 46.3zM16 24.29v.82a10.5 10.5 0 00.86 4.21C20 39.07 31.7 45.13 33 45.77c1.45-.67 16-7.69 17.09-19.48a11.87 11.87 0 00.07-1.19v-.53c-.29-5.44-4.3-9.57-9.37-9.57a9.2 9.2 0 00-7.54 4.11l-.22.33-.23-.33a9.06 9.06 0 00-7.53-4.09c-4.88 0-8.79 3.79-9.3 9z"
          fill="#000000"
        />
      </G>
    </Svg>
  );
}

export default HeartB;

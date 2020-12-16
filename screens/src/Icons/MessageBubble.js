import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MessageBubble = ({ color }) => (
  <Svg
    width={450}
    height={45}
    data-name="\uB808\uC774\uC5B4 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 211 42.07"
  >
    <Path
      d="M207 0H4a4 4 0 00-4 4v27a4 4 0 004 4h185.52l7.07 7.08 7.07-7.08H207a4 4 0 004-4V4a4 4 0 00-4-4z"
      fill={color}
    />
  </Svg>
);

export default MessageBubble;

import React from 'react';

import { View, Text } from 'react-native';

import MessageBubble from './Icons/MessageBubble';

const MessageBubbleContainer = ({ text, right = '9.2%', color }) => (
  <>
    <View style={{ position: 'relative' }}>
      <MessageBubble color={color} />
      <Text style={{
        color: '#fff',
        position: 'absolute',
        top: '19%',
        right,
      }}
      >
        {text}
      </Text>
    </View>
  </>
);

export default MessageBubbleContainer;

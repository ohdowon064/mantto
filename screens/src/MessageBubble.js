import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import Svg, { Path } from 'react-native-svg';

import { moderateScale } from 'react-native-size-matters';

import MessageSvg from './svg/chatBubble.svg';

// TODO : 아래 뾰족 만들기?  SVG 로 받아서 처리해볼것..!

const MessageBubble = ({ text, right = 30 }) => (
  <>
    <View style={{ position: 'relative' }}>
      <MessageSvg width={450} height={45} />
      <Text style={{
        color: '#fff',
        position: 'absolute',
        top: 8,
        right,
      }}
      >
        {text}
      </Text>
    </View>
  </>
);

export default MessageBubble;

const styles = StyleSheet.create({

});

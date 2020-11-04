import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import Svg, {Path} from 'react-native-svg';

import {moderateScale} from 'react-native-size-matters';

// TODO : 아래 뾰족 만들기?  SVG 로 받아서 처리해볼것..!

const MessageBubble = ({text}) => {
  return (
    <>
    <View style={[styles.message,styles.not_mine]}>
      <View style={styles.cloud}>
        <Text style={[styles.text,{color: 'white'}]}>
              {text}
        </Text>
        <View style={[styles.arrow_container, styles.arrow_right_container]}>
          <Svg
            style={styles.arrow_right}
            width={moderateScale(15.5, 0.6)}
            height={moderateScale(17.5, 0.6)}
            viewBox="32.484 17.5 15.515 17.5"
            enable-background="new 32.485 17.5 15.515 17.5">
          <Path
            d={'M 0 0 L 7 0 L 3.5 7 z'}
            fill="red"
            x="0"
            y="0"
          />
          </Svg>
        </View>
      </View>
    </View>
    </>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    marginTop : 20,
    marginVertical: moderateScale(7, 2),
  },
  mine: {
    marginLeft: 20,
  },
  not_mine: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  cloud: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 5,
    backgroundColor:'#43425d',
  },
  text: {
    paddingTop: 3,
    fontSize: 14,
    lineHeight: 22,
  },
  arrow_container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  // arrow_left_container: {
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-start',
  // },
  // arrow_right_container: {
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-end',
  // },
  // arrow_left: {
  //   left: moderateScale(-6, 0.5),
  // },
  // arrow_right: {
  //   right: moderateScale(-6, 0.5),
  // },
});

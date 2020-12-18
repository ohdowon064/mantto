import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TalentQuestionText = ({ innerTextStyle, comment }) => (
  <>
    <View>
      <Text style={styles.baseText}>
        당신의
        <Text style={innerTextStyle}>
          {' '}
          {comment}
        </Text>
        은 무엇인가요?
      </Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  baseText: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 23,
    fontFamily: 'AppleSdGothicNeoUltralight',
  },
});

export default TalentQuestionText;

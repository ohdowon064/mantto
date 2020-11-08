import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TalentQuestionText = ({innerTextStyle, comment}) => {
    return (
        <>
            <View>
                <Text style={styles.baseText}>
                  당신의<Text style={innerTextStyle}> {comment}</Text>은 무엇인가요?
                </Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
  baseText: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 20,
  },
});

export default TalentQuestionText;

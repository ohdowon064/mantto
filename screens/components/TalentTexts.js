import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TalentQuestionText = ({innerTextStyle}) => {
    return (
        <>
            <View>
                <Text style={styles.baseText}>
                    당신<Text style={innerTextStyle}> 열정</Text>은 무엇인가요?
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

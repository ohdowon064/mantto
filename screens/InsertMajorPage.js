import React from 'react';

import {
  StyleSheet, View,
} from 'react-native';

import InsertTalentLayout from './layouts/InsertTalentLayout';

import TalentQuestionText from './components/TalentTexts';

import TalentInputContainer from './components/TalentInputContainer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
  },
  innerText: {
    color: '#ffb18b',
  },
});

const InsertMajorPage = ({ navigation }) => {
  const comment = '전공';
  const dotNumber = 2;

  const nextPage = 'InsertTalentPage';

  return (
    <>
      <InsertTalentLayout
        dotNumber={dotNumber}
        navigation={navigation}
        navPage={nextPage}
      >
        <View style={styles.container}>
          <TalentQuestionText innerTextStyle={styles.innerText} comment={comment} />
          <TalentInputContainer placeholder="학과" />
        </View>
      </InsertTalentLayout>
    </>
  );
};

export default InsertMajorPage;

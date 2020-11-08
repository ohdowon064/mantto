import React from 'react';

import {
  StyleSheet, View,
} from 'react-native';

import InsertTalentLayout from "./layouts/InsertTalentLayout";

import { LeftArrowButton } from "./components/Button";

import TalentQuestionText from './components/TalentTexts';

import TalentInputContainer from './components/TalentInputContainer';

const InsertMajorPage = ({navigation}) => { 
  const comment = "전공";
  const dotNumber = 2;

  const nextPage = 'InsertTalentPage';
  const prevPage = 'SignUpFirstPage';

  return (
    <>
      <InsertTalentLayout 
        dotNumber={dotNumber} 
        navigation={navigation}
        navPage={nextPage}
      >
        <View style={styles.container}>
          <LeftArrowButton navigation={navigation} navPage={prevPage}/>
          <TalentQuestionText innerTextStyle={styles.innerText} comment={comment}/>
          <TalentInputContainer placeholder={'학과'}/>
        </View>
      </InsertTalentLayout>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  innerText: {
    color: '#80BFD7',
  }
});

export default InsertMajorPage;

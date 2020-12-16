import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import InsertTalentLayout from './layouts/InsertTalentLayout';

import { LeftArrowButton } from './components/Button';

import TalentQuestionText from './components/TalentTexts';
import TalentSharpButtons from './components/TalentSharpButtons';

import MessageBubbleContainer from './src/MessageBubbleContainer';

const styles = StyleSheet.create({
  innerText: {
    color: '#edb08c',
  },
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

const PassionPage = ({ navigation }) => {
  const dotNumber = 4;
  const comment = '열정';

  const nextPage = 'MainPage';
  const prevPage = 'InsertTalentPage';
  return (
    <>
      <InsertTalentLayout
        navigation={navigation}
        navPage={nextPage}
        dotNumber={dotNumber}
      >
        <LeftArrowButton navigation={navigation} navPage={prevPage} />
        <TalentQuestionText innerTextStyle={styles.innerText} comment={comment} />
        <View style={styles.container}>
          <MessageBubbleContainer color="#ffb18b" text="재능을 배우고 싶은 항목을 고르세요" right={35} />
        </View>
        <TalentSharpButtons />
      </InsertTalentLayout>
    </>
  );
};

export default PassionPage;

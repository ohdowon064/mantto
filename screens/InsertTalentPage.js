import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import InsertTalentLayout from './layouts/InsertTalentLayout';

import TalentQuestionText from './components/TalentTexts';

import MessageBubbleContainer from './src/MessageBubbleContainer';

import TalentSharpButtons from './components/TalentSharpButtons';

const styles = StyleSheet.create({
  innerText: {
    color: '#80BFD7',
  },
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

const InsertTalentPage = ({ navigation }) => {
  // TODO : 항목 하나는 선택된 상태 유지
  const dotNumber = 4;
  const comment = '재능';

  const nextPage = 'PassionPage';
  return (
    <InsertTalentLayout
      navigation={navigation}
      navPage={nextPage}
      dotNumber={dotNumber}
    >
      <TalentQuestionText innerTextStyle={styles.innerText} comment={comment} />
      <View style={styles.container}>
        <MessageBubbleContainer color="#73ccef" text="재능을 가르치고 싶은 항목을 고르세요" />
      </View>
      <TalentSharpButtons color="#73ccef" talentORPassion={comment} />
    </InsertTalentLayout>
  );
};

export default InsertTalentPage;

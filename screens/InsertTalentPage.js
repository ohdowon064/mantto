import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import InsertTalentLayout from "./layouts/InsertTalentLayout";

import { LeftArrowButton } from "./components/Button";

import TalentQuestionText from './components/TalentTexts';

import MessageBubble from './src/MessageBubble';

import TalentSharpButtons from './components/TalentSharpButtons';

const InsertTalentPage = ({navigation}) => {
  // TODO : 항목 하나는 선택된 상태 유지
    const dotNumber = 3;
    const comment = "재능";

    const nextPage = 'PassionPage';
    const prevPage = 'InsertMajorPage';
    return (
      <>
        <InsertTalentLayout navigation={navigation} navPage={nextPage} dotNumber={dotNumber}>
          <LeftArrowButton navigation={navigation} navPage={prevPage}/>
          <TalentQuestionText innerTextStyle={styles.innerText} comment={comment}/>
          <MessageBubble text="재능을 가르치고 싶은 항목을 고르세요" />
          <TalentSharpButtons/>
        </InsertTalentLayout>
      </>
    );
};

const styles = StyleSheet.create({
  innerText: {
    color: '#80BFD7',
  }
});

export default InsertTalentPage;

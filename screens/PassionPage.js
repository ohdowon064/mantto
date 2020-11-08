import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import InsertTalentLayout from "./layouts/InsertTalentLayout";

import { LeftArrowButton } from "./components/Button";

import TalentQuestionText from './components/TalentTexts';

import TalentInputContainer from './components/TalentInputContainer';

import MessageBubble from './src/MessageBubble';
import TalentSharpButtons from './components/TalentSharpButtons';

const PassionPage = ({navigation}) => {
    const dotNumber = 4;
    const comment = '열정'

    const nextPage = 'LoadingPage';
    const prevPage = 'InsertTalentPage';
    return (
      <>
        <InsertTalentLayout 
          navigation={navigation} 
          navPage={nextPage} 
          dotNumber={dotNumber}
        >
          <LeftArrowButton navigation={navigation} navPage={prevPage}/>
          <TalentQuestionText innerTextStyle={styles.innerText} comment={comment}/>
          <MessageBubble text="재능을 배우고 싶은 항목을 고르세요" />
          <TalentSharpButtons/>
        </InsertTalentLayout>
      </>
    );
};

const styles = StyleSheet.create({
  innerText: {
    color: '#edb08c',
  }
});

export default PassionPage;

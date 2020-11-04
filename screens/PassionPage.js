import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import { LeftArrowButton } from "./components/Button";

import TalentQuestionText from './components/TalentTexts';
import TalentInputContainer from './components/TalentInputContainer';

import MessageBubble from './src/MessageBubble';

const PassionPage = () => {
    return (
      <>
        <LeftArrowButton/>
        <TalentQuestionText innerTextStyle={styles.innerText}/>
        <MessageBubble text="작성하기 어렵다면 ?" />
        <TalentInputContainer 
          placeholder={"만또에게 배우고 싶은 열정을 자유롭게 작성해주세요"}
        />
      </>
    );
};

const styles = StyleSheet.create({
  innerText: {
    color: '#edb08c',
  }
});

export default PassionPage;

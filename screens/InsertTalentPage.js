import React from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { LeftArrowButton } from "./components/Button";

import TalentQuestionText from './components/TalentTexts';

import MessageBubble from './src/MessageBubble';

const PassionPage = () => {
    const { categories } = useSelector(state => ({
      categories : state.talentCategoriesReducer.categories,
    }))

    const dispatch = useDispatch();

    const touchProps = {
      style : {
        flexDirection : 'row',
      },
      onPress: (e) => {
        console.log(e.identifier)
      },
    }
    return (
      <>
        <LeftArrowButton/>
        <TalentQuestionText innerTextStyle={styles.innerText}/>
        <MessageBubble text="재능을 가르치고 싶은 항목을 고르세요" />
        {categories.map(({id,name}) => (
          <TouchableHighlight {...touchProps}>
            <Text key={id}>{name}</Text>
          </TouchableHighlight>
        ))}
      </>
    );
};

const styles = StyleSheet.create({
  innerText: {
    color: '#edb08c',
  },
  sharpButtonsContainer : {
    flexDirection : 'column',
    alignItems : 'center',
  },
  sharpButtons : {
    width : '80%',
    flexDirection : 'row',
    justifyContent : 'center',
  },
  sharpButton : {
    borderRadius : 10,
  },
  buttonTitleStyle : {
    color : '#000000',
  },
  buttonNormal : {
    borderColor : 'blue',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonPress : {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
  }
});

export default PassionPage;

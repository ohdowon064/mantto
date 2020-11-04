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
        <View style={styles.categoriesContainer}>
        {categories.map(({id,name}) => (
          <TouchableHighlight {...touchProps}>
            <Text key={id}>{name}</Text>
          </TouchableHighlight>
        ))}
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  innerText: {
    color: '#edb08c',
  },
  categoriesContainer : {
    flexDirection : 'row',
    width : '80%',
  }
});

export default PassionPage;

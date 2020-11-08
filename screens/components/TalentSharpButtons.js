import React from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import selectCategories from "../actions/index";

const TalentSharpButtons = () => {
    const { categories, category } = useSelector(state => ({
        categories : state.talentCategoriesReducer.categories,
        category : state.talentCategoriesReducer.category
      }))
  
    const dispatch = useDispatch();

    const touchProps = {
      style : {
        borderRadius : 15,
        padding : 4.5,
        flexDirection : 'row',
        alignItems : 'center',
      },
      selectStyle : {
        backgroundColor : '#080040',
      },
      onPress: (e) => {
        dispatch(
          selectCategories(e.target._internalFiberInstanceHandleDEV.memoizedProps.children)
        );
      },
    }

    return (
      <>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesStyle}>
          {categories.map(({id,name}) => (
            <TouchableHighlight 
              key={id} {...touchProps} 
              style={[
                touchProps.style, name === category 
                ? touchProps.selectStyle
                : touchProps.style
                ]} >
              <Text style={[
                  name === category 
                  ? styles.selectText 
                  : styles.text
                ]}>{name}</Text>
            </TouchableHighlight>
          ))}
          </View>
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  categoriesContainer : {
    alignItems : 'center',
  },
  categoriesStyle : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    flexWrap : 'wrap',
    width : '90%',
  },
  text : {
    fontSize : 15,
    color : "#000000",
    margin : 3,
  },
  selectText : {
    color : "#ffffff"
  }
});

export default TalentSharpButtons;

import React from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { selectCategories } from '../actions/index';

const styles = StyleSheet.create({
  categoriesContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  categoriesStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '90%',
  },
  text: {
    fontSize: 12,
    color: '#000000',
    margin: 3,
  },
  selectText: {
    fontSize: 12,
    color: '#ffffff',
  },
});

const TalentSharpButtons = ({ color }) => {
  const { categories, category } = useSelector((state) => ({
    categories: state.talentCategoriesReducer.categories,
    category: state.talentCategoriesReducer.category,
  }));

  const dispatch = useDispatch();

  function handleClick({ name }) {
    dispatch(selectCategories(name));
  }

  const touchProps = {
    style: {
      borderRadius: 15,
      paddingTop: 4.5,
      paddingBottom: 4.5,
      paddingRight: 7,
      paddingLeft: 7,
      flexDirection: 'row',
      alignItems: 'center',
    },
    selectStyle: {
      backgroundColor: color,
    },
  };

  return (
    <>
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesStyle}>
          {categories.map(({ id, name }) => (
            <TouchableHighlight
              key={id}
              style={[
                touchProps.style, name === category
                  ? touchProps.selectStyle
                  : touchProps.style,
              ]}
              onPress={() => handleClick({ name })}
            >
              <Text
                style={[
                  name === category
                    ? styles.selectText
                    : styles.text,
                ]}
              >
                {name}
              </Text>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </>
  );
};

export default TalentSharpButtons;

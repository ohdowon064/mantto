import React from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectTalent, selectPassion, setUserTalent, setUserPassion,
} from '../actions/index';

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

const TalentSharpButtons = ({ color, talentORPassion }) => {
  const dispatch = useDispatch();

  const { categories, talent, passion } = useSelector((state) => ({
    categories: state.talentCategoriesReducer.categories,
    talent: state.talentCategoriesReducer.talent,
    passion: state.talentCategoriesReducer.passion,
  }));

  function handleClick({ name }) {
    if (talentORPassion === '재능') {
      dispatch(selectTalent(name));
      dispatch(setUserTalent(name));
    }
    if (talentORPassion === '열정') {
      dispatch(selectPassion(name));
      dispatch(setUserPassion(name));
    }
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
  if (talentORPassion === '재능') {
    return (
      <>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesStyle}>
            {categories.map(({ id, name }) => (
              <TouchableHighlight
                key={id}
                style={[
                  touchProps.style, name === talent
                    ? touchProps.selectStyle
                    : touchProps.style,
                ]}
                onPress={() => handleClick({ name })}
              >
                <Text
                  style={[
                    name === talent
                      ? styles.selectText
                      : styles.text,
                  ]}
                >
                  #
                  {name}
                </Text>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesStyle}>
          {categories.map(({ id, name }) => (
            <TouchableHighlight
              key={id}
              style={[
                touchProps.style, name === passion
                  ? touchProps.selectStyle
                  : touchProps.style,
              ]}
              onPress={() => handleClick({ name })}
            >
              <Text
                style={[
                  name === passion
                    ? styles.selectText
                    : styles.text,
                ]}
              >
                #
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

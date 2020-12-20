import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import { LeftArrowButton } from './Button';

const styles = StyleSheet.create({
  topNav: {
    flex: 0.1,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 6,
    backgroundColor: '#fff',
    borderColor: '#f6f6f8',
  },
  topNavTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    margin: 15,
    marginLeft: '23%',
  },
});

const TabNav = ({ text = '', navigation }) => (
  <View style={styles.topNav}>
    <LeftArrowButton navigation={navigation} />
    <Text style={styles.topNavTitle}>{text}</Text>
  </View>
);

export default TabNav;

import React from 'react';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  manttoButtonContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 15,
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,.05)',
  },
  manttoActiveButton: {
    borderWidth: 1,
    borderColor: '#ffb18b',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ffb18b',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 70,
    paddingLeft: 70,
  },
  manttoButton: {
    borderWidth: 1,
    borderColor: '#ffb18b',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 70,
    paddingLeft: 70,
  },
  mantiActiveButton: {
    borderWidth: 1,
    borderColor: '#3ec5f9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#3ec5f9',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 70,
    paddingLeft: 70,
  },
  mantiButton: {
    borderWidth: 1,
    borderColor: '#3ec5f9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 70,
    paddingLeft: 70,
  },
});

const ManttoButtonContainer = ({ type, setType }) => (
  <View style={styles.manttoButtonContainer}>
    <TouchableOpacity
      style={type ? styles.manttoButton : styles.mantiActiveButton}
      onPress={() => setType(!type)}
    >
      <Text>만또</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={type ? styles.manttoActiveButton : styles.mantiButton}
      onPress={() => setType(!type)}
    >
      <Text>만띠</Text>
    </TouchableOpacity>
  </View>
);

export default ManttoButtonContainer;

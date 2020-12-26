import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Input from './Input';

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    width: '85%',
    marginTop: 50,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInputCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    fontSize: 17,
  },
});

const TalentInputContainer = ({
  placeholder, control, name, refer,
}) => (
  <>
    <View style={styles.textInputCenter}>
      <View style={styles.textInputContainer}>
        <Input
          name={name}
          reference={refer}
          control={control}
          inputStyle={styles.textInput}
          placeholder={placeholder}
        />
        {/* TODO : input 값 "submit" 가능한 버튼 ( > ) 만들기 */}
      </View>
    </View>
  </>
);

export default TalentInputContainer;

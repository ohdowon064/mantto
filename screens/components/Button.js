import React from 'react';

import {
    View,
    StyleSheet,
  } from 'react-native';

import { Button } from 'react-native-elements';

import IconAntDesign from 'react-native-vector-icons/AntDesign'; 

const LeftArrowButton = () => {
  return (
    <View style={styles.buttonLeft}>
      <Button
        type="clear"
        icon={<IconAntDesign name="arrowleft" size={30} color="#000000" />}
        title=""
      />
    </View>
  );
};

const SubmitButton = ({ buttonStyle, handleSubmit, onSubmit }) => {
  return (
      <Button
        buttonStyle={buttonStyle}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
  )
}

const WriteHelpPointDownButton = () => {
  return (
    <Button
      type="clear"
      icon={<IconAntDesign name="down" size={20} color="#000000" />}
      title=""
    />
  )
}

const styles = StyleSheet.create({
    buttonLeft: {
        flexDirection: 'row',
        marginLeft: 10,
      },
});

export { 
  LeftArrowButton, 
  SubmitButton, 
  WriteHelpPointDownButton
};

import React from 'react';

import {
    View,
    StyleSheet,
  } from 'react-native';

import { Button } from 'react-native-elements';

import IconAntDesign from 'react-native-vector-icons/AntDesign'; 

const LeftArrowButton = ({ navigation, navPage }) => {
  return (
    <View style={styles.buttonLeft}>
      <Button
        type="clear"
        icon={<IconAntDesign name="arrowleft" size={30} color="#000000" />}
        title=""
        onPress={() => navigation.navigate(`${navPage}`)}
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

const RightArrowButton = ({navigation, navPage}) => {
  return (
    <View style={styles.buttonBottomRight}>
      <Button
      type="clear"
      icon={<IconAntDesign name="right" size={20} color="#000000" />}
      buttonStyle={styles.rightButtonStyle}
      onPress={() => navigation.navigate(`${navPage}`)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rightButtonStyle : {
    borderRadius : 17.5,
    width : 35,
    height : 35,
    backgroundColor : '#ffffff',
  },

  buttonLeft: {
    flexDirection: 'row',
    marginLeft: 10,
  },

  buttonBottomRight : {
    flexDirection : 'row',
    justifyContent : 'flex-end',
    marginRight : 17,
    paddingBottom : 50,
  }
});

export { 
  LeftArrowButton, 
  SubmitButton, 
  WriteHelpPointDownButton,
  RightArrowButton
};

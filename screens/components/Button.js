import React from 'react';

import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

import { Button } from 'react-native-elements';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  rightButtonStyle: {
    borderRadius: 17.5,
    width: 35,
    height: 35,
    backgroundColor: '#ffffff',
  },

  buttonLeft: {
    flexDirection: 'row',
    marginLeft: 10,
  },

  buttonBottomRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 25,
    paddingBottom: 50,
  },
});

const LeftArrowButton = ({ navigation, navPage }) => (
  <View style={styles.buttonLeft}>
    <Button
      type="clear"
      icon={<IconAntDesign name="arrowleft" size={30} color="#000000" />}
      title=""
      onPress={() => navigation.navigate(`${navPage}`)}
    />
  </View>
);

const SubmitButton = ({
  title, buttonStyle, handleSubmit, onSubmit, onLogin,
}) => (
  <Button
    buttonStyle={buttonStyle}
    title={title}
    onPress={() => {
      handleSubmit(onSubmit);
      onLogin();
    }}
  />
);

function TalentToggleButton({ name, value }) {
  const touchProps = {
    style: {
      borderRadius: 15,
      padding: 4.5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    selectStyle: {
      backgroundColor: '#080040',
    },
    onPress: () => {},
  };

  return (
    <TouchableHighlight
      {...touchProps}
      style={[
        touchProps.style, name === value
          ? touchProps.selectStyle
          : touchProps.style,
      ]}
    >
      <Text style={[
        name === value
          ? styles.selectText
          : styles.text,
      ]}
      >
        {name}
      </Text>
    </TouchableHighlight>
  );
}

const WriteHelpPointDownButton = () => (
  <Button
    type="clear"
    icon={<IconAntDesign name="down" size={20} color="#000000" />}
    title=""
  />
);

const RightArrowButton = ({ navigation, navPage }) => (
  <View style={styles.buttonBottomRight}>
    <Button
      type="clear"
      icon={<IconAntDesign name="right" size={20} color="#000000" />}
      buttonStyle={styles.rightButtonStyle}
      onPress={() => navigation.navigate(`${navPage}`)}
    />
  </View>
);

export {
  LeftArrowButton,
  SubmitButton,
  WriteHelpPointDownButton,
  RightArrowButton,
  TalentToggleButton,
};
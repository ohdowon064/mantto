import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { LeftArrowButton } from './components/Button';

import LoginInputContainer from './components/LoginInputContainer';

const LoginPage = ({ navigation }) => {
  const prevPage = 'LoginSignUpStartPage';
  return (
    <>
      <LeftArrowButton navigation={navigation} navPage={prevPage} />
      <LoginInputContainer />
    </>
  );
};

const styles = StyleSheet.create({
  innerText: {
    color: '#80BFD7',
  },
});

export default LoginPage;

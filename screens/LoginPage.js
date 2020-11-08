import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { Button } from "react-native-elements";

import { LeftArrowButton } from "./components/Button";

import LoginInputContainer from "./components/LoginInputContainer";

const LoginPage = ({navigation}) => {
    const prevPage = 'LoginSignUpStartPage';
    return (
        <>
            <LeftArrowButton navigation={navigation} navPage={prevPage}/>
            <LoginInputContainer/>
            <View style={styles.buttonContainer}>
              <Button 
                type="clear" 
                title="확인"
                titleStyle={styles.buttonTitleStyle} 
                buttonStyle={ styles.loginButton }
                onPress={()=>navigation.navigate('LoginPage')}
              >
              </Button>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
  innerText: {
    color: '#80BFD7',
  },
  buttonContainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  loginButton: {
    width: 277,
    height: 51,
    borderWidth:1,
    borderRadius: 25,
    borderColor:"#80BFD7",
    backgroundColor: "#80BFD7",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleStyle : {
    fontSize : 20,
    color : '#ffffff',
  }
});

export default LoginPage;

import React from 'react';

import {
  View, StyleSheet, Image, Text, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  manttoText: {
    color: '#80BFD7',
    fontSize: 40,
    margin: 10,
  },
  manttoText2: {
    marginBottom: 30,
    color: '#707070',
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: 320,
    height: 51,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#80BFD7',
    backgroundColor: '#80BFD7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    width: 320,
    height: 51,
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: '#e4e4e4',
    borderColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default function LoginSignUpStartPage({ navigation }) {
  return (
    <View style={styles.layoutContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={{ width: 150, height: 150 }}
          // eslint-disable-next-line global-require
          source={require('./src/images/logo.png')}
        />
        <Text style={styles.manttoText}>Mantto</Text>
        <Text style={styles.manttoText2}>열정과 재능을 잇다. 만또</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('SignUpFirstPage')}
        >
          <Text
            style={styles.signUpText}
          >
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

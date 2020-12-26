import React, { useEffect } from 'react';

import {
  View, StyleSheet, Text,
} from 'react-native';
import NewLogoSvg from './src/svg/newLogo.svg';

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
});

export default function LoginLoadingPage({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainPage');
    }, 2000);
  }, []);
  return (
    <View style={styles.layoutContainer}>
      <View style={styles.logoContainer}>
        <NewLogoSvg width={150} height={150} />
        <Text style={styles.manttoText}>Mantto</Text>
        <Text style={styles.manttoText2}>열정과 재능을 잇다. 만또</Text>
      </View>
    </View>
  );
}

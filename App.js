import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';




export default function App() {
  
  Font.loadAsync({
  AppleSDGothicNeoM: require('./assets/fonts/AppleSDGothicNeoM.ttf')

});

  return (
    <View style={styles.container}>
      <Text style={styles.text}>한글 </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize : 50,
    fontFamily: 'AppleSDGothicNeoM'
  }
});

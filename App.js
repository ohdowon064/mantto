import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from "@use-expo/font";

export default function App() {
  const [isLoaded] = useFonts({
    'AppleSDGothicNeoB' : require('./assets/fonts/AppleSDGothicNeoB.ttf')
  });
  
  return (
    <SafeAreaView style={styles.container}>
        <View>  
      <Text style={ styles.manttoText }>Mantto</Text>
        </View>
        <View>
          <Text style={ styles.manttoText2}>열정과 재능을 잇다. 만또</Text>
        </View>
        <View style={ styles.loginButton }>
          <Button title="로그인" color="#ffffff" style={ styles.loginButton }><Text>로그인 </Text></Button>
        </View>
        <View style={ styles.signupButton}>
          <Button title="회원가입" color="#80BFD7" style={ styles.signupButton}><Text> </Text></Button>
        </View>
    </SafeAreaView>
  )
};



const styles = StyleSheet.create({
  manttoText:{
      fontFamily:"AppleSDGothicNeoB",
      color:"#80BFD7",
      fontSize:40,
      margin:10

  },
   manttoText2:{
     marginTop:10,
     marginBottom:30,
     color:"black"
   },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButton: {
    width: 277,
    height: 51,
    borderRadius: 25,
    backgroundColor: "#80BFD7",
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  signupButton: {
    width: 277,
    height: 51,
    borderWidth:1,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    borderColor:"#80BFD7",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
});
 
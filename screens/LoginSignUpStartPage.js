import React from 'react';

import { View, StyleSheet, Image , Text} from 'react-native';

import { Button } from "react-native-elements";


export default function LoginSignUpStartPage({navigation}) {
  return (
    <View style={styles.Logincontainer}>
      <View style={styles.container} >
          <View>
            <Image 
            style= {{width:150, height:150}} 
            source={require('./src/images/logo.png')}/> 
            <Text style={ styles.manttoText }>Mantto</Text>
            <Text style={ styles.manttoText2}>열정과 재능을 잇다. 만또</Text>
          </View>
            <Button 
              type="clear" 
              title="로그인"  
              buttonStyle={ styles.loginButton }
              onPress={()=>navigation.navigate('LoginPage')}
            >
            <Text style={{color: '#ffffff'}}>로그인</Text>
            </Button>
            <View style={{height :10}}/>
            <Button 
              type="clear"
              title="회원가입" 
              buttonStyle={ styles.signupButton}
              onPress={()=>navigation.navigate('SignUpFirstPage')}
              >
              <Text style={{color: "#80BFD7"}}>회원가입</Text>
            </Button>
      </View>
    </View>
  )
};



const styles = StyleSheet.create({
  manttoText:{
      color:"#80BFD7",
      fontSize:40,
      margin:10,
      

  },
  manttoText2:{
     marginTop:10,
     marginBottom:30,
     color:"black"
   },
  container: {
    alignItems:'center',
    justifyContent:"center",
    paddingTop : 100
    
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
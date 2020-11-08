import React from 'react';

import { SafeAreaView, Text, View, StyleSheet, TextInput } from 'react-native';

import InsertTalentLayout from "./layouts/InsertTalentLayout";

import { Button } from "react-native-elements";

import { RightArrowButton } from "./components/Button";

export default function SignupFirstPage({navigation}) {
  const [text, setText] = React.useState('');
  const dotNumber = 1;
  const nextPage = 'InsertMajorPage'
  
  return (
    // <SafeAreaView style={styles.fullContainer}>
    <InsertTalentLayout dotNumber={dotNumber} navigation={navigation} navPage={nextPage}>
        <View style={styles.titleView}>  
          <Text style={ styles.manttoText }>
            수많은
            <Text style={styles.specialText1}> 재능</Text>
            과 수많은
            <Text style={styles.specialText2}> 열정</Text>
            {"\n"}
            그리고 그들이 모이는곳 
            {"\n"}
            MANTTO
          </Text>
        </View>
        <View>  
        <TextInput
          style={styles.textInput}
          placeholder="   이름"
          onChangeText={(inputText) => setText(inputText)}
          defaultValue={text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="   학교 이메일"
          onChangeText={(inputText) => setText(inputText)}
          defaultValue={text}
          />    
        </View>
        <View style={styles.verifyContainer}>    
          <TextInput
            style={styles.specialTextInput}
            placeholder="   이메일 인증번호"
            onChangeText={(inputText) => setText(inputText)}
            defaultValue={text}
            /> 
            <Button
              buttonStyle={styles.buttonDesign} 
              title="확인" titleColor="white"
            />  
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="   비밀번호"
          onChangeText={(inputText) => setText(inputText)}
          defaultValue={text}
        />
    </InsertTalentLayout>
  // </SafeAreaView>
  )
};



const styles = StyleSheet.create({
  verifyContainer:{
    flexDirection:"row"
  },
  fullContainer:{
    flex:1,
    backgroundColor:"#F1EAE2"
  },
  buttonDesign:{
    marginLeft:0,
    width:68,
    height:38,
    backgroundColor:"#EAA786",
    borderRadius:5
  },
  textInput: {
    width:289,
    height:39,
    borderWidth:1,
    borderColor:"#F1DDC5",
    marginLeft:43,
    marginBottom:12.5,
    backgroundColor:"#FFFFFF"
  },
  specialTextInput:{
    width:196,
    height:38,
    borderWidth:1,
    borderColor:"#F1DDC5",
    backgroundColor:"#FFFFFF",
    marginLeft:43,
    marginBottom:12.5,
    marginRight:10
  },
  buttonLeft: {
    flexDirection: 'row',
    marginLeft: 10,
    color:"black"
  },
  specialText1:{
    color:"#80BFD7",
    fontSize:24
  },
  specialText2:{
    color:"#EAA786",
    fontSize:24
  },
  titleView:{
    margin:20,
    marginLeft:26,
    marginTop:99,
    marginRight:102,
    marginBottom:35
  },
  manttoText:{
    color:"#80BFD7",
    fontSize:24,
    color:"#080240"
  },
  container: {
    flex: 1,
    marginLeft:20,
    marginTop:50,
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
});
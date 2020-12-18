import React from 'react';

import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';

import { Button } from 'react-native-elements';

import InsertTalentLayout from './layouts/InsertTalentLayout';

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: '7%',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginTop: 17,
    marginBottom: 40,
  },
  verifyContainer: {
    flexDirection: 'row',
  },
  labelText: {
    color: '#9ca5b4',
    fontSize: 15,
    marginBottom: 6,
  },
  passwordInfo: {
    color: '#5e656f',
    fontSize: 15,
  },
  buttonDesign: {
    marginLeft: 0,
    paddingTop: '18%',
    paddingBottom: '18%',
    paddingRight: '7%',
    paddingLeft: '7%',
    backgroundColor: '#73ccef',
    borderRadius: 5,
  },
  textInput: {
    width: '91%',
    borderWidth: 1.5,
    borderColor: '#5e656f',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  specialTextInput: {
    width: '65%',
    borderWidth: 1.5,
    borderColor: '#5e656f',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 12.5,
    marginRight: 10,
  },
  buttonLeft: {
    flexDirection: 'row',
    marginLeft: 10,
    color: 'black',
  },
  specialText1: {
    color: '#80BFD7',
    fontSize: 24,
  },
  specialText2: {
    color: '#EAA786',
    fontSize: 24,
  },
  titleView: {
    margin: 20,
    marginTop: 50,
    marginRight: 102,
    marginBottom: 35,
  },
  manttoText: {
    fontSize: 24,
    color: '#080240',
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default function SignupFirstPage({ navigation }) {
  const [text, setText] = React.useState('');
  const dotNumber = 1;
  const nextPage = 'InsertMajorPage';
  const prePage = 'LoginSignUpStartPage';

  return (
    <InsertTalentLayout
      dotNumber={dotNumber}
      navigation={navigation}
      prePage={prePage}
      navPage={nextPage}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.title}>회원가입</Text>
        <Text style={styles.labelText}>닉네임</Text>
        <TextInput
          style={styles.textInput}
          placeholder="   닉네임"
          onChangeText={(inputText) => setText(inputText)}
          defaultValue={text}
        />
        <Text style={styles.labelText}>학교 이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="   이메일"
          onChangeText={(inputText) => setText(inputText)}
          defaultValue={text}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>이메일 인증번호</Text>
        <View style={styles.verifyContainer}>
          <TextInput
            style={styles.specialTextInput}
            placeholder="   인증번호"
            onChangeText={(inputText) => setText(inputText)}
            defaultValue={text}
          />
          <Button
            buttonStyle={styles.buttonDesign}
            title="확인"
            titleColor="white"
          />
        </View>
        <Text style={styles.labelText}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="   비밀번호"
          onChangeText={(inputText) => setText(inputText)}
          defaultValue={text}
        />
        <Text style={styles.passwordInfo}>문자,숫자,기호를 조합하여 8자 이상을 사용하세요.</Text>
      </View>
    </InsertTalentLayout>
  );
}

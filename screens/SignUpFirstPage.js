/* eslint-disable no-nested-ternary */
import React from 'react';

import {
  Text, View, StyleSheet,
} from 'react-native';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';

import Input from './components/Input';

import InsertTalentLayout from './layouts/InsertTalentLayout';

import { requestSignUp, setSignUp } from './actions/index';

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
  alertMsg: {
    color: 'red',
  },
});

export default function SignupFirstPage({ navigation }) {
  const dispatch = useDispatch();

  const { signUpFields, messageTotal } = useSelector((state) => ({
    signUpFields: state.SignUpReducer.signUpFields,
    messageTotal: state.SignUpReducer.messageTotal,
  }));

  const {
    message, account, nickname, email,
  } = messageTotal;

  const dotNumber = 1;
  const nextPage = 'SignUpAuthPage';
  const {
    handleSubmit, control, reset, errors,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setSignUp(data));

    dispatch(requestSignUp(navigation));

    reset({
      account: '',
      email: '',
      nickname: '',
      password: '',
    });
  };

  const accountInputRef = React.useRef();
  const emailInputRef = React.useRef();
  const nicknameInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  return (
    <InsertTalentLayout
      dotNumber={dotNumber}
      navigation={navigation}
      navPage={nextPage}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      totalMessage={messageTotal}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.title}>회원가입</Text>
        <Text style={styles.labelText}>아이디</Text>
        <Input
          name="account"
          reference={accountInputRef}
          control={control}
          inputStyle={styles.textInput}
          placeholder="아이디"
        />
        {account ? <Text style={styles.alertMsg}>이미 존재하는 아이디입니다.</Text> : null}
        <Text style={styles.labelText}>부산대 웹메일</Text>
        <Input
          name="email"
          reference={emailInputRef}
          control={control}
          inputStyle={styles.textInput}
          placeholder="이메일"
        />
        {email ? email[0].indexOf('유효') !== -1
          ? <Text style={styles.alertMsg}>유효한 이메일이 아닙니다.</Text>
          : <Text style={styles.alertMsg}>이미 존재하는 이메일입니다.</Text>
          : null}
        <Text style={styles.labelText}>닉네임</Text>
        <Input
          name="nickname"
          reference={nicknameInputRef}
          control={control}
          inputStyle={styles.textInput}
          placeholder="닉네임"
        />
        {nickname ? <Text style={styles.alertMsg}>이미 존재하는 닉네임입니다.</Text> : null}
        <Text style={styles.labelText}>비밀번호</Text>
        <Input
          secureTextEntry
          name="password"
          reference={passwordInputRef}
          control={control}
          inputStyle={styles.textInput}
          placeholder="비밀번호"
        />
        <Text style={styles.passwordInfo}>문자,숫자,기호를 조합하여 8자 이상을 사용하세요.</Text>
      </View>
    </InsertTalentLayout>
  );
}

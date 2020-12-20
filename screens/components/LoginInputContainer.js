import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from './Button';

import Input from './Input';

import { changeLoginField, requestLogin } from '../actions/index';

const styles = StyleSheet.create({
  textInputContainer: {
    width: '90%',
  },
  textInputCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  textInput: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#5e656f',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  labelText: {
    color: '#9ca5b4',
    fontSize: 15,
    marginBottom: 6,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: 320,
    padding: 12,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#73ccef',
    backgroundColor: '#73ccef',
  },
  buttonTitleStyle: {
    fontSize: 20,
    color: '#ffffff',
  },
  passwordInfo: {
    color: '#5e656f',
    fontSize: 15,
  },
});

const LoginInputContainer = () => {
  const {
    handleSubmit, control, reset, errors,
  } = useForm();

  const dispatch = useDispatch();
  // navigation.navigate('LoginPage')
  const { loginFields, accessToken } = useSelector((state) => ({
    loginFields: state.LoginReducer.loginFields,
    accessToken: state.LoginReducer.accessToken,
  }));
  console.log(accessToken, loginFields);

  const mailInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  function handleLogin() {
    dispatch(requestLogin());
  }

  const onSubmit = (data) => {
    dispatch(changeLoginField({ data }));
    reset({
      nickname: '',
      account: '',
      password: '',
    });
  };

  console.log(errors);
  return (
    <>
      <View style={{
        flex: 1,
      }}
      >
        <View style={{
          height: 450,
        }}
        >
          <View style={styles.textInputCenter}>
            <View style={styles.textInputContainer}>
              <Text style={styles.labelText}>아이디</Text>
              <Input
                name="account"
                reference={mailInputRef}
                control={control}
                inputStyle={styles.textInput}
                placeholder="아이디"
              />
            </View>
          </View>
          <View style={styles.textInputCenter}>
            <View style={styles.textInputContainer}>
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
          </View>
          <View style={styles.buttonContainer}>
            <SubmitButton
              title="로그인"
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.loginButton}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              onLogin={handleLogin}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginInputContainer;

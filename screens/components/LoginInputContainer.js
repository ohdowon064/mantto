import React from 'react';

import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from './Button';

import Input from './Input';

import { changeLoginField, requestLogin } from '../actions/index';

import { PersonIcon, MailIcon, LockIcon } from '../src/Icons/LoginPageIcons';

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

  const nameInputRef = React.useRef();
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
              <PersonIcon />
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
              <LockIcon />
              <Input
                secureTextEntry
                name="password"
                reference={passwordInputRef}
                control={control}
                inputStyle={styles.textInput}
                placeholder="비밀번호"
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <SubmitButton
              title="확인"
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

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 60,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInputCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    fontSize: 17,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: 277,
    height: 51,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#80BFD7',
    backgroundColor: '#80BFD7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleStyle: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default LoginInputContainer;

/* eslint-disable no-nested-ternary */
import React from 'react';

import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';

import { Button } from 'react-native-elements';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import Input from './components/Input';

import {
  requestActive,
} from './actions/index';

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
});

export default function SignupFirstPage({ navigation }) {
  const dispatch = useDispatch();

  const { signUpFields, authActiveMessage } = useSelector((state) => ({
    signUpFields: state.SignUpReducer.signUpFields,
    authActiveMessage: state.SignUpReducer.authActiveMessage,
  }));

  const { email } = signUpFields;
  const {
    handleSubmit, control, reset, errors,
  } = useForm();

  const onSubmit = (data) => {
    const { authCode } = data;
    dispatch(requestActive(authCode));
  };

  const passwordInputRef = React.useRef();

  const dotNumber = 2;
  const nextPage = 'LoginPage';

  return (
    <InsertTalentLayout
      dotNumber={dotNumber}
      navigation={navigation}
      navPage={nextPage}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.title}>웹메일 인증</Text>
        <Text>
          {email}
          {' '}
          로
        </Text>
        <Text style={{ fontSize: 15 }}>
          인증 메일을 보냈습니다.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>이메일 인증번호</Text>
        <View style={styles.verifyContainer}>
          <Input
            name="authCode"
            reference={passwordInputRef}
            control={control}
            inputStyle={styles.specialTextInput}
            placeholder="인증번호"
          />
          <Button
            buttonStyle={styles.buttonDesign}
            title="확인"
            titleColor="white"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        {authActiveMessage
          ? authActiveMessage.indexOf('Incorrect') === -1
            ? (
              <Text style={{
                color: '#008000',
              }}
              >
                인증에 성공했습니다!
              </Text>
            )
            : (
              <Text style={{
                color: 'red',
              }}
              >
                유효한 인증 코드가 아닙니다.
              </Text>
            )
          : null}
      </View>
    </InsertTalentLayout>
  );
}

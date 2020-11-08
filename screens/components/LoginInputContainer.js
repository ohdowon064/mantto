import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { useForm } from 'react-hook-form';

import Input from './Input';

import { PersonIcon, MailIcon, LockIcon } from "../src/Icons/LoginPageIcons";

const LoginInputContainer = ({placeholder, name}) => {
    const { handleSubmit, control, reset, errors } = useForm();

    const nameInputRef = React.useRef();
    const mailInputRef = React.useRef();
    const passwordInputRef = React.useRef();

    const onSubmit = data => {
      console.log(data);
        reset({
            "nickname" : '',
            "email" : '',
            "password" : ''
        });
    };

    console.log(errors);
    return (
        <>
            <View style={styles.textInputCenter}>
                <View style={styles.textInputContainer}>
                    <PersonIcon/>
                    <Input
                        type='text'
                        name="nickname" 
                        reference={nameInputRef} 
                        control={control}
                        inputStyle={styles.textInput}
                        placeholder="이름"
                    />
                </View>
            </View>
            <View style={styles.textInputCenter}>
                <View style={styles.textInputContainer}>
                    <MailIcon/>
                    <Input
                        type='email'
                        name="email"
                        reference={mailInputRef} 
                        control={control}
                        inputStyle={styles.textInput}
                        placeholder="이메일"
                    />
                </View>
            </View>
            <View style={styles.textInputCenter}>
                <View style={styles.textInputContainer}>
                    <LockIcon/>
                    <Input
                        type='password'
                        name="password"
                        reference={passwordInputRef} 
                        control={control}
                        inputStyle={styles.textInput}
                        placeholder="비밀번호"
                    />
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
        width : '100%',
        height: 40,
        fontSize: 17,
    },
});

export default LoginInputContainer;

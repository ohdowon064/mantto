import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { useForm } from 'react-hook-form';

import { Button } from "react-native-elements";

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
            <View style={styles.buttonContainer}>
              <Button 
                type="clear" 
                title="확인"
                titleStyle={styles.buttonTitleStyle} 
                buttonStyle={ styles.loginButton }
                onPress={()=>navigation.navigate('LoginPage')}
              >
              </Button>
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
    buttonContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
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
    buttonTitleStyle : {
        fontSize : 20,
        color : '#ffffff',
    }
});

export default LoginInputContainer;

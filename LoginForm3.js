import React from 'react';

import {StyleSheet, View, TextInput, Button, Text} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import { LeftArrowButton } from './Button';

const LoginForm = () => {
    const { handleSubmit, control, reset, errors } = useForm();

    const firstNameInputRef = React.useRef();
    const lastNameInputRef = React.useRef();

    const onSubmit = data => {
      console.log(data);
        reset({
            firstName : '',
            lastName : '',
        });
    };

    console.log(errors);

    return (
        <>
            <LeftArrowButton/>
            <View style={styles.container}>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
});

export default LoginForm;

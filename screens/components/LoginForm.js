import React from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
} from 'react-native';

import { useForm } from 'react-hook-form';

import Input from "./Input";
import { SubmitButton } from './Button';

const LoginForm = () => {
    const { handleSubmit, control, reset, errors } = useForm();

    const firstNameInputRef = React.useRef();
    const lastNameInputRef = React.useRef();

    const firstName = "firstName";
    const lastName = "lastName";

    const onSubmit = data => {
      console.log(data);
        reset({
            firstName : '',
            lastName : '',
        });
    };

    console.log(errors);

    return (
      <View style={styles.container}>
        <Text style={styles.label}>First name</Text>
        <Input 
            name={firstName} 
            control={control} 
            reference={firstNameInputRef}
            inputStyle={styles.input}
        />
        <Text style={styles.label}>Last name</Text>
        <Input 
            name={lastName} 
            control={control} 
            reference={lastNameInputRef}
            inputStyle={styles.input}
        />
        <SubmitButton
            buttonStyle={styles.button}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
        />
      </View>
    );
};


export default LoginForm;



const styles = StyleSheet.create({
    label: {
      color: 'white',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#ec5990',
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 8,
      backgroundColor: '#0e101c',
    },
    input: {
      backgroundColor: 'white',
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
  });

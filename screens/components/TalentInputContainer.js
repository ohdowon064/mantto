import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { useForm } from 'react-hook-form';

import { WriteHelpPointDownButton } from "./Button";

import Input from './Input';

const TalentInputContainer = ({placeholder}) => {
    const { handleSubmit, control, reset, errors } = useForm();

    const passionInputRef = React.useRef();

    const passionItem = "passionItem";

    const onSubmit = data => {
      console.log(data);
        reset({
            passionItem : ''
        });
    };

    console.log(errors);
    return (
        <>
            <View style={styles.textInputCenter}>
                <View style={styles.textInputContainer}>
                    <Input
                        name={passionItem} 
                        reference={passionInputRef} 
                        control={control}
                        inputStyle={styles.textInput}
                        placeholder={placeholder}
                    />
                {/* TODO : input 값 "submit" 가능한 버튼 ( > ) 만들기 */}
                <WriteHelpPointDownButton/>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 20,
        borderBottomWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textInputCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        fontSize: 12,
    },
});

export default TalentInputContainer;

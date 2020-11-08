import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { useForm } from 'react-hook-form';

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
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 98,
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

export default TalentInputContainer;

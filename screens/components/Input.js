import React from 'react';

import {TextInput} from 'react-native';

import { Controller } from 'react-hook-form';

const Input = ({name, reference, control, inputStyle, placeholder}) => {
    return (
        <>
        <Controller
          name={name}
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              placeholder={placeholder}
              style={inputStyle}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              value={value}
              ref={reference}
            />
          )}
          defaultValue=""
          rules={{ required: true }}
          onFocus={() => {
            reference.current.focus();
          }}
        />
        </>
    )
}

export default Input;
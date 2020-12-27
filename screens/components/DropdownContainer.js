import React, { useState } from 'react';

import { Dropdown } from 'react-native-material-dropdown';

import { useDispatch } from 'react-redux';

import {
  setRegisterValue,
} from '../actions/index';

export default function DropdownContainer({ style, label, talent }) {
  const dispatch = useDispatch();

  const newTalent = talent || '';

  const [value, setValue] = useState(newTalent);

  function handleChange(value) {
    setValue(value);
    dispatch(setRegisterValue({ label, value }));
  }

  const data = [
    {
      value: '디자인',
    },
    {
      value: 'IT/프로그래밍',
    },
    {
      value: '취업',
    },
    {
      value: '마케팅',
    },
    {
      value: '스포츠/레저',
    },
    {
      value: '번역/통역',
    },
    {
      value: '운세/상담',
    },
  ];

  return (
    <Dropdown
      containerStyle={style}
      data={data}
      label={label}
      value={value}
      onChangeText={(value) => handleChange(value)}
    />
  );
}

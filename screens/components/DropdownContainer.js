import React, { useState } from 'react';

import { Dropdown } from 'react-native-material-dropdown';

export default function DropdownContainer({ style, label, talent }) {
  const [value, setValue] = useState(talent);

  console.log(value);

  function handleClick(value) {
    console.log(value);
    setValue(value);
    // 프론트에서 저장해두고 있다가 백엔드 한테 전달
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
      label={label}
      data={data}
      value={value}
      onChangeText={(value) => handleClick(value)}
    />
  );
}

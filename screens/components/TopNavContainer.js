import React from 'react';

import {
  View, Text,
} from 'react-native';

import { LeftArrowButton } from './Button';

function TopNavContainer({ navigation, title }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <LeftArrowButton navigation={navigation} />
      <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ width: '15%' }} />
    </View>
  );
}

export default TopNavContainer;

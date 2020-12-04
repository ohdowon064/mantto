import React from 'react';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {
  View,
} from 'react-native';

const StarsIcon = () => (
  <View style={{ flexDirection: 'row', paddingTop: 5 }}>
    <AntDesignIcon name="star" style={{ color: '#eaa786' }} />
    <AntDesignIcon name="star" style={{ color: '#eaa786' }} />
    <AntDesignIcon name="star" style={{ color: '#eaa786' }} />
    <AntDesignIcon name="star" style={{ color: '#eaa786' }} />
    <AntDesignIcon name="star" style={{ color: '#e9e9f0' }} />
  </View>
);

export default StarsIcon;

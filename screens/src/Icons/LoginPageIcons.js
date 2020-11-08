import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import IconIonicons from 'react-native-vector-icons/Ionicons';

import IconFeather from 'react-native-vector-icons/Feather';

import IconFontisto from 'react-native-vector-icons/Fontisto';


const PersonIcon = () => {
  return (
    <>
      <IconIonicons
          size={15}
          name="person-outline"
          style={styles.iconStyle}
      />
    </>
    );
};


const MailIcon = () => {
  return (
      <>
        <IconFeather
          size={15}
          name="mail"
          style={styles.iconStyle}
        />
      </>
  );
};

const LockIcon = () => {
  return (
    <>
        <IconFontisto
            size={15}
            name="unlocked"
            style={styles.iconStyle}
        />
    </>
  );
};    


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle : {
    color : '#80BFD7',
  }
});

export { PersonIcon, LockIcon, MailIcon} ;

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';

const DotIcons = ({ dotNumber }) => {
  return (
    <>
    <View style={styles.dotContainer}>
        <IconOcticons
            name="primitive-dot"
            size={30}
            style={dotNumber >= 1 ? styles.activeDot : styles.dot}
        />
        <IconOcticons
            name="primitive-dot"
            size={30}
            style={dotNumber >= 2 ? styles.activeDot : styles.dot}
        />
        <IconOcticons
            name="primitive-dot"
            size={30}
            style={dotNumber >= 3 ? styles.activeDot : styles.dot}
        />
        <IconOcticons
            name="primitive-dot"
            size={30}
            style={dotNumber >= 4 ? styles.activeDot : styles.dot}
        />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  activeDot : {
    marginRight: 10,
    color : '#EAA786'
  },
  dot: {
    marginRight: 10,
    color : "#ffffff"
  },
});

export default DotIcons;

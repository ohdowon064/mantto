import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';

const DotIcons = () => {

  return (
    <>
    <View style={styles.dotContainer}>
        <IconOcticons
            name="primitive-dot"
            size={30}
            color="#edb08c"
            style={styles.dot}
        />
        <IconOcticons
            name="primitive-dot"
            size={30}
            color="#edb08c"
            style={styles.dot}
        />
        <IconOcticons
            name="primitive-dot"
            size={30}
            color="#edb08c"
            style={styles.dot}
        />
        <IconOcticons
            name="primitive-dot"
            size={30}
            color="#edb08c"
            style={styles.dot}
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
    marginBottom: 50,
  },
  dot: {
    marginRight: 10,
  },
});

export default DotIcons;

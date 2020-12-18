import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import IconOcticons from 'react-native-vector-icons/Octicons';

const styles = StyleSheet.create({
  dotContainer: {
    flex: 1,
    marginLeft: '23%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    marginRight: 10,
    color: '#73ccef',
  },
  dot: {
    marginRight: 10,
    color: '#f1ddc5',
  },
});

const DotIcons = ({ dotNumber }) => (
  <>
    <View style={styles.dotContainer}>
      <IconOcticons
        name="primitive-dot"
        size={15}
        style={dotNumber >= 1 ? styles.activeDot : styles.dot}
      />
      <IconOcticons
        name="primitive-dot"
        size={15}
        style={dotNumber >= 2 ? styles.activeDot : styles.dot}
      />
      <IconOcticons
        name="primitive-dot"
        size={15}
        style={dotNumber >= 3 ? styles.activeDot : styles.dot}
      />
      <IconOcticons
        name="primitive-dot"
        size={15}
        style={dotNumber >= 4 ? styles.activeDot : styles.dot}
      />
    </View>
  </>
);

export default DotIcons;

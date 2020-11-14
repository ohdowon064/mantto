import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

const MainPageLayout = ({children}) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.body}>
            <ScrollView>
              {children}
            </ScrollView>
        </SafeAreaView>
      </>
    );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F4EEE8',
  },
});

export default MainPageLayout;

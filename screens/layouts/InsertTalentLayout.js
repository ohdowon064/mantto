import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import DotIcons from "../src/DotIcons";

const InsertTalentLayout = ({children}) => {
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.body}>
            <ScrollView>
              {children}
            </ScrollView>
            <DotIcons/>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
  body: {
    paddingTop : 90,
    flex: 1,
    backgroundColor: '#ece8e5',
  },
});

export default InsertTalentLayout;

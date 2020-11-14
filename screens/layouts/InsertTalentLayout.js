import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import { RightArrowButton } from "../components/Button";

import DotIcons from "../src/Icons/DotIcons";

const InsertTalentLayout = ({children, dotNumber, navigation, navPage}) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.body}>
            <ScrollView>
              <View style={styles.container}>
              </View>
              {children}
              <View style={styles.bottomContainer}>
              </View>
            </ScrollView>
            <DotIcons dotNumber={dotNumber}/>
            <RightArrowButton navigation={navigation} navPage={navPage}/>
        </SafeAreaView>
      </>
    );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F4EEE8',
  },
  container : {
    height : 80,
  },
  bottomContainer: {
    height : 40,
  }
});

export default InsertTalentLayout;

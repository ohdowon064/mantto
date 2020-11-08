import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import { RightArrowButton } from "../components/Button";

import DotIcons from "../src/Icons/DotIcons";

const InsertTalentLayout = ({children, dotNumber, navigation, navPage}) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.body}>
            <ScrollView>
              {children}
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
    paddingTop : 90,
    backgroundColor: '#F1EAE2',
  },
});

export default InsertTalentLayout;

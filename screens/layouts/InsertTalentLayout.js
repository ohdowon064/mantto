import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import { RightArrowButton } from '../components/Button';

import TabNav from '../components/TabNav';

import DotIcons from '../src/Icons/DotIcons';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 40,
  },
});

const InsertTalentLayout = ({
  children, dotNumber, navigation, navPage, handleSubmit, onSubmit, dispatch, totalMessage = {
    message: '', nickname: '', email: '', account: '',
  },
}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <TabNav text="" navigation={navigation} />
        {children}
        <View style={styles.bottomContainer}>
          <DotIcons dotNumber={dotNumber} />
          <RightArrowButton
            totalMessage={totalMessage}
            navigation={navigation}
            navPage={navPage}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            dotNumber={dotNumber}
            dispatch={dispatch}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default InsertTalentLayout;

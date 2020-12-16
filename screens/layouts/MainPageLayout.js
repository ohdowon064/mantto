import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import Animated from 'react-native-reanimated';

import BottomSheet from 'reanimated-bottom-sheet';

import renderContent from '../components/MainPageBottomSheetContent';

const MainPageLayout = ({ children }) => {
  const sheetRef = React.useRef();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          {children}
        </ScrollView>
        <BottomSheet
          ref={sheetRef}
          snapPoints={['27%', '37%', '75%']}
          borderRadius={30}
          renderContent={renderContent}
        />
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

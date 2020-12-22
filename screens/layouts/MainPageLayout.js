import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Keyboard,
} from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';

import { MainPageBottomSheetHeader, MainPageBottomSheetContent } from '../components/MainPageBottomSheetContent';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

const MainPageLayout = ({ navigation, children, type }) => {
  const bottomSheetRef = React.useRef();

  const keyboardDidShow = () => {
    bottomSheetRef.current.snapTo(0);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          {children}
        </ScrollView>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={['29%', '29%', '77%']}
          borderRadius={30}
          renderHeader={type
            ? () => <MainPageBottomSheetHeader color="#ffb18b" navigation={navigation} />
            : () => <MainPageBottomSheetHeader color="#73ccef" navigation={navigation} />}
          renderContent={type
            ? () => <MainPageBottomSheetContent color="#ffb18b" navigation={navigation} />
            : () => <MainPageBottomSheetContent color="#73ccef" navigation={navigation} />}
        />
      </SafeAreaView>
    </>
  );
};

export default MainPageLayout;

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';

import MainPageBottomSheetContent from '../components/MainPageBottomSheetContent';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

const MainPageLayout = ({ navigation, children, type }) => {
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
          renderContent={type
            ? () => <MainPageBottomSheetContent color="#ffb18b" navigation={navigation} />
            : () => <MainPageBottomSheetContent color="#73ccef" navigation={navigation} />}
        />
      </SafeAreaView>
    </>
  );
};

export default MainPageLayout;

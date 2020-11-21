import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text
} from 'react-native';

import Animated from 'react-native-reanimated';

import BottomSheet from 'reanimated-bottom-sheet';

import IconAntDesign from 'react-native-vector-icons/AntDesign'; 

import { Button } from "react-native-elements";

import TalentCategory from '../components/TalentCategory';

const MainPageLayout = ({children}) => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        paddingTop : 20,
        height: 700,
      }}
    >
      <View style={{
        padding : 15,
      }}>
        <Text style={{ 
          fontSize : 24,
          }}>부산대 최고의 만또를 찾아서</Text>
      </View>
      <View style={{
        backgroundColor: '#f7f7f8',
        padding : 11,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
      }}>
        <View style={{
          flexDirection : 'row',
          alignItems : 'center',
        }}>
          <Button
          type="clear"
          icon={<IconAntDesign name="left" size={13} color="#000000" />}
          onPress={() => {}}
          />
          <Text style={{
            fontSize : 17,
            padding : 5,
          }}>디자인</Text>
          <Text style={{
            fontSize : 12,
            color : '#b8bbc6',
          }}>126명의 만또</Text>
        </View>
        <Button
        type="clear"
        icon={<IconAntDesign name="right" size={13} color="#000000" />}
        onPress={() => {}}
        />
      </View>
      <TalentCategory/>
    </View>
  );

  const sheetRef = React.useRef(null);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.body}>
            <ScrollView>
              {children}
            </ScrollView>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[620, 300, 300]}
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

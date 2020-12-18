import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import Toggle from 'react-native-toggle-element';

import TabNav from './components/TabNav';

function AppSettingsPage({ navigation }) {
  const [pushIsActive, setPushIsActive] = useState(false);

  const pushIsActiveSwitch = () => setPushIsActive((previousState) => !previousState);
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
    >
      <TabNav text="앱 설정" navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#f6f6f8',
        }}
      >
        <View style={{
          fontSize: 18,
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 10,
          marginTop: 15,
          backgroundColor: '#ffffff',
        }}
        >
          <Text>채팅 알림 설정</Text>
          <Toggle
            value={pushIsActive}
            onPress={pushIsActiveSwitch}
            trackBar={{
              width: 100,
              height: 28,
              activeBackgroundColor: '#00b7ff',
              inActiveBackgroundColor: '#b8bbc6',
            }}
            thumbButton={{
              width: 50,
              height: 30,
              activeBackgroundColor: '#f8f8f8',
              inActiveBackgroundColor: '#f8f8f8',
            }}
            leftTitle={pushIsActive ? '푸시' : '푸시안함'}
          />
        </View>
      </View>
    </SafeAreaView>

  );
}

export default AppSettingsPage;

import React from 'react';

import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import TabNav from './components/TabNav';

import WatchListCategory from './components/WatchListCategory';

function WatchListPage({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
    >
      <TabNav text="관심 목록" navigation={navigation} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#f6f6f8',
        }}
      >
        <Text style={{
          fontSize: 14, color: '#909090', padding: 10, marginBottom: 10,
        }}
        >
          총 2명
        </Text>
        <ScrollView>
          <WatchListCategory />
        </ScrollView>
      </View>
    </SafeAreaView>

  );
}

export default WatchListPage;

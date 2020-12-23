import React from 'react';

import {
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import SearchCategoriesContainer from './components/SearchCategoriesContainer';

import WatchListCategory from './components/WatchListCategory';

function ManttoLists({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: '#f6f6f8',
        }}
      >
        <SearchCategoriesContainer navigation={navigation} text="지도" />
        <ScrollView>
          <WatchListCategory />
        </ScrollView>
      </View>
    </SafeAreaView>

  );
}

export default ManttoLists;

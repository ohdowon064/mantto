import React from 'react';

import { View } from 'react-native';

import WatchListItem from './WatchListItem';

function WatchListCategory({ navigation }) {
  function handleClick({ name }) {
    navigation.navigate('DetailPage', { name });
  }
  return (
    <>
      {/* flatList 도 생각해봐야 한다. */}
      <View style={{
        flex: 1,
      }}
      >
        <WatchListItem
          name="오도원"
          onClick={handleClick}
        />
        <WatchListItem />
      </View>
    </>
  );
}

export default WatchListCategory;

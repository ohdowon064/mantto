import React from 'react';

import { View, FlatList } from 'react-native';

import { useSelector } from 'react-redux';

import TalentCategoryItem from './TalentCategoryItem';

function TalentCategory({ navigation, color }) {
  const { userList } = useSelector((state) => ({
    userList: state.talentCategoriesReducer.userList,
  }));

  function handleClick({ item }) {
    navigation.navigate('DetailPage', { item });
  }

  const renderItem = ({ item }) => (
    <TalentCategoryItem
      item={item}
      color={color}
      onPress={() => handleClick({ item })}
    />
  );

  return (
    <>
      <View style={{
        paddingTop: 3,
        paddingLeft: 12,
        paddingRight: 12,
        flex: 1,
      }}
      >
        <FlatList
          data={userList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

export default TalentCategory;

import React from 'react';

import { View } from 'react-native';

import TalentCategoryItem from './TalentCategoryItem';

function TalentCategory({ navigation, color }) {
  function handleClick({ name }) {
    navigation.navigate('DetailPage', { name });
  }
  return (
    <>
      {/* flatList 도 생각해봐야 한다. */}
      {/* 리스트 컨테이너 */}
      <View style={{
        paddingTop: 3,
        paddingLeft: 14,
        paddingRight: 14,
        flex: 1,
      }}
      >
        {/* 리스트 한개 */}
        <TalentCategoryItem
          name="오도원"
          rank="1"
          rankColor={color}
          onClick={handleClick}
        />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />
        <TalentCategoryItem />

      </View>
    </>
  );
}

export default TalentCategory;

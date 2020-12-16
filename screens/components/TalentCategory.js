import React from 'react';

import { Text, View, Image } from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import TalentCategoryItem from './TalentCategoryItem';

const TalentCategory = () => (
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
      <TalentCategoryItem />
      <TalentCategoryItem name="오도원" rank="2" rankColor="#898989" />
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

export default TalentCategory;

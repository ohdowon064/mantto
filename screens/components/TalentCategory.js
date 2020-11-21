import React from 'react';

import { Text, View, Image } from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import TalentCategoryItem from './TalentCategoryItem';

const TalentCategory = () => {
    return (
    <>
    {/* flatList 도 생각해봐야 한다. */}
    {/* 리스트 컨테이너 */}
    <View style={{
        padding : 16,
        width : '100%',
        height : '100%',
      }}>
        {/* 리스트 한개 */}
      <TalentCategoryItem/>
      <TalentCategoryItem/>
    </View>
      </>
    )
}

export default TalentCategory;
      
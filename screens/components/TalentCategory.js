import React from 'react';

import { View } from 'react-native';

const TalentCategory = () => {
    return (
    <>
    {/* flatList 도 생각해봐야 한다. */}
    {/* 리스트 컨테이너 */}
    <View style={{
        padding : 16,
        width : '100%',
        height : '100%',
        backgroundColor : 'blue',
      }}>
        {/* 리스트 한개 */}
        <View style={{
          backgroundColor : 'red',
          width : '100%',
          height : '10%',
          flexDirection : 'row',
        }}>
          {/* 프로필 컨테이너 */}
        <View style={{
          width : '20%',
          height : '100%',
          backgroundColor : 'yellow',
        }}>
          {/* 프로필 사진 들어감 */}
        </View>
        <View style={{
          width : '35%',
          height : '100%',
          backgroundColor : 'yellow',
          marginLeft : 5,
        }}>
          {/* 이예나님 | 디자인 만또*/}
          {/* 별점 들어감*/}
        </View>
        <View style={{
          width : '40%',
          height : '100%',
          backgroundColor : 'yellow',
          marginLeft : 5,
        }}>
          {/* 1위 만또 들어감 */}
          {/* 과제물어봐*/}
          {/* 현재 123명 만띠가 찜했습니다.*/}
        </View>
        </View>
    </View>
      </>
    )
}

export default TalentCategory;
      
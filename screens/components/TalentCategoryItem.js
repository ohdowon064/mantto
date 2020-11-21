import React from 'react';

import { Text, View, Image} from 'react-native';

import StarsIcon from '../src/Icons/StarsIcon';

const TalentCategoryItem = () => {
  return (
    <>
      <View style={{
        width : '100%',
        height : '11%',
        padding : 5,
        flexDirection : 'row',
        backgroundColor : '#f6f6f8',
        marginTop : 7,
      }}>
          {/* 프로필 컨테이너 */}
        <View style={{
          width : '20%',
          height : '100%',
        }}>
          {/* 알람 이미지 임의로 넣어둠 추후 프로필로 변경 */}
          <Image source={require('../src/images/design.png')} />
        </View>
        <View style={{
          width : '30%',
          height : '100%',
          marginLeft : 5,
        }}>
          <View style={{ flexDirection : 'row', alignItems : 'center'}}>
            <Text style={{ fontSize : 17 }}>이예나님 |</Text>
            <Text style={{ fontSize : 10 }}> 디자인 만또</Text>
          </View>
          <StarsIcon/>
        </View>
        <View style={{
          width : '45%',
          height : '100%',
          marginLeft : 5,
          justifyContent : 'space-between',
        }}>
          <View style={{
            flexDirection : 'row',
            justifyContent : 'space-around',
            }}>
            <Text style={{ 
              backgroundColor : '#2cc2dc',
              fontSize : 14,
              paddingTop : 2,
              paddingBottom : 2,
              paddingRight : 12,
              paddingLeft : 12,
              marginLeft : 10,
              width : 75,
              color : '#fff',
              borderRadius : 10,
              }}>
              1위 만또
            </Text>
            <Text style={{
              fontSize : 11,
              color : '#4b4b4b',
            }}>과제 물어봐✔</Text>
          </View>
          <Text style={{
            fontWeight : '700',
            fontSize : 12,
          }}
          >현재 123명 만띠가 찜했습니다 ❤</Text>
        </View>
      </View>
    </>
  )
}

export default TalentCategoryItem;

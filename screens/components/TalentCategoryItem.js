import React from 'react';

import { Text, View, Image } from 'react-native';

import StarsIcon from '../src/Icons/StarsIcon';

const TalentCategoryItem = ({ name = '이예나', rank = '1', rankColor = '#2cc2dc' }) => (
  <>
    <View style={{
      padding: 5,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#f6f6f8',
      marginTop: 7,
    }}
    >
      <View style={{
        width: '20%',
      }}
      >
        {/* 알람 이미지 임의로 넣어둠 추후 프로필로 변경 */}
        <Image source={require('../src/images/people.png')} />
      </View>
      <View style={{
        width: '80%',
        height: '50%',
        marginLeft: 5,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 13 }}>
              {name}
              님
              {' '}
              |
              {' '}
              <Text style={{ fontSize: 9 }}> 디자인 만또</Text>
            </Text>
            <StarsIcon />
          </View>
          <View style={{
            flexDirection: 'row',
          }}
          >
            <Text style={{
              backgroundColor: rankColor,
              fontSize: 12,
              paddingTop: 2,
              paddingBottom: 2,
              marginLeft: 7,
              width: '35%',
              color: '#fff',
              borderRadius: 10,
              textAlign: 'center',
            }}
            >
              {rank}
              위 만또
            </Text>
            <Text style={{
              fontSize: 11,
              marginLeft: 13,
              color: '#4b4b4b',
            }}
            >
              과제 물어봐✔
            </Text>
          </View>
        </View>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 10,
        }}
        >
          <Text style={{
            fontSize: 12,
            fontWeight: '700',
            paddingRight: 10,
          }}
          >
            현재 123명 만띠가 찜했습니다 ❤
          </Text>
        </View>
      </View>
    </View>
  </>
);

export default TalentCategoryItem;

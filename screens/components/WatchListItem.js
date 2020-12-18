import React, { useState } from 'react';

import {
  Text, View, Image, Platform, TouchableOpacity,
} from 'react-native';

import StarsIcon from '../src/Icons/StarsIcon';

import { HeartIcon } from './Button';

function WatchListItem({
  name = '이예나', category = '디자인', onClick,
}) {
  const [dibsOn, setDibs] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={{
          padding: 5,
          paddingLeft: 15,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#fff',
          ...Platform.select({
            ios: {
              shadowColor: 'rgb(50, 50, 50)',
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                height: -1,
                width: 0,
              },
            },
            android: {
              elevation: 3,
            },
          }),
        }}
        onPress={() => onClick({ name })}
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
          <View style={{
            flexDirection: 'row',
            width: '100%',
            paddingRight: 13,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
            <View>
              <Text style={{ fontSize: 13 }}>
                {name}
                님
                {' '}
                |
                {' '}
                <Text style={{ fontSize: 9, color: 'rgba(0,0,0,.4)' }}>
                  {' '}
                  {category}
                </Text>
              </Text>
              <StarsIcon size={10} />
            </View>
            <View style={{
              flexDirection: 'row',
            }}
            >
              <HeartIcon dibsOn={dibsOn} setDibs={setDibs} color="#3b86ff" />
            </View>
          </View>
          <View style={{
            width: '100%',
            alignItems: 'flex-end',
            paddingTop: 10,
            paddingRight: 13,
          }}
          >
            <Text style={{
              fontSize: 11,
              marginLeft: 13,
              color: '#b8bbc8',
            }}
            >
              과제 물어봐 ✓
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '700',
            }}
            >
              현재 123명 만띠가 찜했습니다 🖤
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          padding: 10,
          paddingRight: 20,
          backgroundColor: 'rgba(112,112,112,0.1)',
        }}
      >
        <Text style={{
          fontSize: 13,
          fontWeight: '700',
          color: '#3b86ff',
        }}
        >
          채팅하기 &gt;
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default WatchListItem;

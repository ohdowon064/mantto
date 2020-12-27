import React from 'react';

import {
  Text, View, Image, Platform, TouchableOpacity,
} from 'react-native';

import StarsIcon from '../src/Icons/StarsIcon';

function TalentCategoryItem({
  item, onPress, color,
}) {
  return (
    <>
      <TouchableOpacity
        style={{
          padding: 5,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginTop: 7,
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
        onPress={onPress}
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
            <View
              style={{
                width: '45%',
              }}
            >
              <Text style={{ fontSize: 13 }}>
                {item.nickname}
                님
                {' '}
                |
                {' '}
                <Text style={{ fontSize: 9, color: 'rgba(0,0,0,.4)' }}>
                  {' '}
                  {item.mantto_talent}
                </Text>
              </Text>
              <StarsIcon size={15} />
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            >
              <Text style={{
                backgroundColor: item.mantto_rank < 2 ? color : '#979797',
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
                {item.mantto_rank}
                위 만또
              </Text>
              <View>
                {item.report_help ? (
                  <Text style={{
                    fontSize: 9,
                    marginLeft: 13,
                    color: '#b8bbc8',
                  }}
                  >
                    과제 물어봐 ✓
                  </Text>
                ) : null}
                {item.exam_help ? (
                  <Text style={{
                    fontSize: 9,
                    marginLeft: 13,
                    color: '#b8bbc8',
                  }}
                  >
                    시험 물어봐 ✓
                  </Text>
                ) : null}
              </View>
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
              현재
              {' '}
              {item.like_users.length}
              명 만띠가 찜했습니다 🖤
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default TalentCategoryItem;

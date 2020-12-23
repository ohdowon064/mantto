import React, { useState } from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import StarsIcon from '../src/Icons/StarsIcon';

import { HeartIcon } from './Button';

const styles = StyleSheet.create({
  detailButton: {
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e9e9e9',
  },
  detailText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 13,
  },
});

function MapMarkerItem({
  navigation,
  name = '이예나', category = '디자인', color = '#fff', textColor = '#72cbee',
}) {
  const [dibsOn, setDibs] = useState(false);
  return (
    <>
      <View
        style={{
          paddingLeft: 3,
          activeOpacity: 1,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginTop: 7,
        }}
      >
        {/* Avatar, 상세보기 버튼 Container */}
        <View style={{
          paddingRight: 5,
          alignItems: 'center',
        }}
        >
          {/* 알람 이미지 임의로 넣어둠 추후 프로필로 변경 */}
          <Image source={require('../src/images/people.png')} />
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => navigation.navigate('DetailPage')}
          >
            <Text style={styles.detailText}>상세보기</Text>
          </TouchableOpacity>
        </View>
        {/* 총 정보 container */}
        <View style={{
          width: '80%',
          height: '50%',
          marginLeft: 5,
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        >
          {/* 이름, 관심사, 별점, 길이 View container */}
          <View style={{
            flexDirection: 'row',
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
              <StarsIcon size={15} />
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              >
                <AntDesign name="enviromento" color="#20bff9" size={13} />
                <Text style={{
                  marginLeft: 5,
                  color: '#20bff9',
                }}
                >
                  300 m

                </Text>
              </View>
            </View>
          </View>
          {/* 리뷰 & 찜 버튼 View container */}
          <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingTop: 10,
            paddingRight: 25,
          }}
          >
            <TouchableOpacity
              style={{
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 5,
                paddingBottom: 5,
                marginRight: 20,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#72cbee',
                backgroundColor: color,
              }}
              onPress={() => navigation.navigate('ReviewPage')}
            >
              <Text style={{ color: textColor }}>후기</Text>
            </TouchableOpacity>
            <HeartIcon dibsOn={dibsOn} setDibs={setDibs} color="#73ccef" />
          </View>
        </View>
      </View>
    </>
  );
}

export default MapMarkerItem;

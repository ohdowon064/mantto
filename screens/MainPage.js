import React from 'react';

import styled from 'styled-components/native';

import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Button, Badge } from 'react-native-elements';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import MainPageLayout from './layouts/MainPageLayout';

import CategoryItem from './components/CategoryItem';

import designSvg from './src/svg/design.svg';

import programmingSvg from './src/svg/programming.svg';

import pictureSvg from './src/svg/picture.svg';

import photoSvg from './src/svg/photo.svg';

import marketSvg from './src/svg/market.svg';

import sportsSvg from './src/svg/sports.svg';

import jobSvg from './src/svg/job.svg';

import talkSvg from './src/svg/talk.svg';

import AlarmSvg from './src/svg/alarm.svg';

const SearchContainer = styled.View`
    flex : 1;
    flex-direction : row;
    padding-top : 50px;
    padding-left : 16px;
`;

const SearchInputContainer = styled.View`
    flex-direction : row;
    align-items : center;
    background-color : #FFF;
    width : 235px;
    height : 40px;
    margin-left : 6.89px;
    padding-left : 12px;
`;

const SearchTextInput = styled.TextInput`
    background-color : #FFFFFF;
    width : 200px;
    height : 40px;
    font-size : 18px;
`;
const CategoryTitle = styled.Text`
    margin-top : 25px;
    margin-bottom : 15px;
    margin-left : 32px;
    font-size : 21px;
    font-weight : 700;
`;

const CategoryContainer = styled.View`
    justify-content : space-between;
    margin : 10px;
`;

const styles = StyleSheet.create({
  bottomTabDesign: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  buttonStyle: {
    width: 50.8,
    height: 40,
    backgroundColor: '#80bfd7',
    borderRadius: 5,
  },
  categoryLine: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

const MainPage = () => (
  <MainPageLayout>
    <SearchContainer>
      <Button title="만또" titleStyle={{ color: '#fff' }} buttonStyle={styles.buttonStyle} />
      <SearchInputContainer>
        <AntDesignIcon name="search1" size={18} />
        <SearchTextInput placeholder="검색" placeholderTextColor="#000" />
      </SearchInputContainer>
      <View style={{ justifyContent: 'center', marginLeft: 10 }}>
        <TouchableOpacity>
          <AlarmSvg width={30} height={30} />
        </TouchableOpacity>
        <Badge
          status="error"
          // value 서버에서 알람 목록수와 일치
          // 한번 알람에 들어가고 난 뒤에는 배지 삭제 isSee? true false
          // 새 알람 들어올 때 다시 true로 바꿔줌
          value="1"
          containerStyle={{ position: 'absolute', top: -1, left: -1 }}
        />
      </View>
    </SearchContainer>
    <CategoryTitle>카테고리</CategoryTitle>
    <CategoryContainer>
      <View style={styles.categoryLine}>
        <CategoryItem Svg={designSvg} itemTitle="디자인" />
        <CategoryItem Svg={programmingSvg} itemTitle="IT/프로그래밍" />
        <CategoryItem Svg={pictureSvg} itemTitle="영상/사진/음향" />
        <CategoryItem Svg={photoSvg} itemTitle="번역/통역" />
      </View>
      <View style={styles.categoryLine}>
        <CategoryItem Svg={marketSvg} itemTitle="마케팅" />
        <CategoryItem Svg={sportsSvg} itemTitle="스포츠/레저" />
        <CategoryItem Svg={jobSvg} itemTitle="취업" />
        <CategoryItem Svg={talkSvg} itemTitle="운세/상담" />
      </View>
    </CategoryContainer>
  </MainPageLayout>
);

export default MainPage;

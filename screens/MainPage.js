import React, { useEffect, useState, useRef } from 'react';

import styled from 'styled-components/native';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { Badge } from 'react-native-elements';

import { useDispatch } from 'react-redux';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {
  loadUserList,
} from './actions/index';

import MainPageLayout from './layouts/MainPageLayout';

import CategoryItem from './components/CategoryItem';

import designSvg from './src/svg/design.svg';

import programmingSvg from './src/svg/programming.svg';

import programmingSvgB from './src/svg/programming_B.svg';

import pictureSvg from './src/svg/picture.svg';

import pictureSvgB from './src/svg/picture_B.svg';

import photoSvg from './src/svg/photo.svg';

import marketSvg from './src/svg/market.svg';

import MarketIcon from './src/Icons/MarketIcon';

import sportsSvg from './src/svg/sports.svg';

import sportsSvgB from './src/svg/sports_B.svg';

import jobSvg from './src/svg/job.svg';

import jobSvgB from './src/svg/job_B.svg';

import talkSvg from './src/svg/talk.svg';

import talkSvgB from './src/svg/talk_B.svg';

import HeartB from './src/Icons/HeartB';

import AlarmSvg from './src/svg/alarm.svg';

import ManttoButtonContainer from './components/ManttoButtonContainer';

const SearchContainer = styled.View`
    flex : 1;
    flex-direction : row;
    justify-content : space-between;
    padding-top : 50px;
    padding-left : 8px;
    padding-right : 10px;
`;

const SearchInputContainer = styled.View`
    flex-direction : row;
    align-items : center;
    background-color : rgba(118,118,118,0.1);
    width : 85%;
    margin-left : 6.89px;
    padding-left : 12px;
    border-radius : 10px;
`;

const SearchTextInput = styled.TextInput`
    width : 85%;
    font-size : 18px;
    color : #3c3c43;
    padding : 7px;
`;

const CategoryTitle = styled.Text`
    margin-top : 25px;
    margin-bottom : 15px;
    margin-left : 20px;
    font-size : 18px;
    font-weight : 600;
`;

const CategoryContainer = styled.View`
    justify-content : space-between;
    margin : 10px;
`;

const styles = StyleSheet.create({
  categoryLine: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

});

function MainPage({ navigation }) {
  const dispatch = useDispatch();

  const bottomSheetRef = useRef(null);

  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  const [type, setType] = useState(true);

  function keyboardDidShow() {
    if (sheetIsOpen) {
      bottomSheetRef.current.snapTo(0);
    }
  }

  useEffect(() => {
    dispatch(loadUserList());
    try {
      Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    } catch (e) {
      console.log(e);
    }
    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
    };
  }, []);

  return (
    <MainPageLayout
      type={type}
      navigation={navigation}
      bottomSheetRef={bottomSheetRef}
      setSheetIsOpen={setSheetIsOpen}
    >
      <SearchContainer>
        <SearchInputContainer>
          <AntDesignIcon name="search1" size={18} />
          <SearchTextInput placeholder="검색" placeholderTextColor="#000" />
        </SearchInputContainer>
        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chats')}
          >
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
      <ManttoButtonContainer type={type} setType={setType} />
      <CategoryTitle>카테고리</CategoryTitle>
      <CategoryContainer>
        {type ? (
          <>
            <View style={styles.categoryLine}>
              <CategoryItem navigation={navigation} Svg={designSvg} itemTitle="디자인" />
              <CategoryItem navigation={navigation} Svg={programmingSvg} itemTitle="IT/프로그래밍" />
              <CategoryItem navigation={navigation} Svg={pictureSvg} itemTitle="영상/사진/음향" />
              <CategoryItem navigation={navigation} Svg={marketSvg} itemTitle="마케팅" />
            </View>
            <View style={styles.categoryLine}>
              <CategoryItem navigation={navigation} Svg={photoSvg} itemTitle="번역/통역" />
              <CategoryItem navigation={navigation} Svg={sportsSvg} itemTitle="스포츠/레저" />
              <CategoryItem navigation={navigation} Svg={jobSvg} itemTitle="취업" />
              <CategoryItem navigation={navigation} Svg={talkSvg} itemTitle="운세/상담" />
            </View>
          </>
        ) : (
          <>
            <View style={styles.categoryLine}>
              <CategoryItem navigation={navigation} Svg={designSvg} itemTitle="디자인" />
              <CategoryItem navigation={navigation} Svg={programmingSvgB} itemTitle="IT/프로그래밍" />
              <CategoryItem navigation={navigation} Svg={pictureSvgB} itemTitle="영상/사진/음향" />
              <CategoryItem navigation={navigation} Svg={MarketIcon} itemTitle="마케팅" />
            </View>
            <View style={styles.categoryLine}>
              <CategoryItem navigation={navigation} Svg={talkSvgB} itemTitle="번역/통역" />
              <CategoryItem navigation={navigation} Svg={sportsSvgB} itemTitle="스포츠/레저" />
              <CategoryItem navigation={navigation} Svg={jobSvgB} itemTitle="취업" />
              <CategoryItem navigation={navigation} Svg={HeartB} itemTitle="운세/상담" />
            </View>
          </>
        )}

      </CategoryContainer>
    </MainPageLayout>
  );
}

export default MainPage;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar,
  StyleSheet, View, Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import CheckEntypo from 'react-native-vector-icons/Entypo';

import { HeartIcon, LeftArrowButton } from './components/Button';

import StarsIcon from './src/Icons/StarsIcon';

const TopContainer = styled.View`
  flex : 0.25;
  flex-direction : row;
  padding-top : 10px;
  padding-right : 13px;
  justify-content : space-between;
`;

const CircleAvatar = styled.View`
  position : absolute;
  left : 31%;
  top : -21%;
  width : 140px;
  height : 140px;
  border-radius : 140px;
  border-width : 1px;
`;

const DetailContainer = styled.View`
  position : relative;
  background-color : #fff;
  border-top-left-radius : 30px;
  border-top-right-radius : 30px;
  flex : 0.8;
`;

const DetailTitle = styled.Text`
  padding-top : 15%;
  font-size : 23px;
  margin-bottom : 5px;
`;
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#73ccef',
  },
  innerText: {
    color: '#ffb18b',
  },
  comments: {
    paddingTop: 10,
    fontSize: 12,
    color: '#6a6a6a',
    marginBottom: 25,
  },
  miniTitle: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: '700',
    backgroundColor: 'rgba(8,0,62,.04)',
  },
  linearGradientBigBubble: {
    position: 'absolute',
    top: '10%',
    width: 170,
    height: 170,
    borderTopRightRadius: 170,
    zIndex: -1,
  },
  linearGradientBubble: {
    position: 'absolute',
    top: '10%',
    left: '70%',
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: -1,
  },
  bottomContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatGoButton: {
    alignItems: 'center',
    marginLeft: 20,
    justifyContent: 'center',
    width: '75%',
    height: '70%',
    borderRadius: 7,
    backgroundColor: '#00b7ff',
  },
  levelContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  activeLevel: {
    borderRadius: 25,
    fontSize: 16,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#00b7ff',
    color: '#fff',
  },
  inActiveLevel: {
    fontSize: 16,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#000',
  },
  assignOrExamContainer: {
    paddingLeft: 25,
    paddingTop: 15,
    paddingBottom: 10,
  },
  assignOrExam: {
    flexDirection: 'row',
    paddingRight: 32,
    justifyContent: 'space-between',
    fontSize: 15,
    marginBottom: 5,
  },
  assignOrExamText: {
    fontSize: 15,
  },
  matchedNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 32,
    alignItems: 'center',
  },
  matchedNumber: {
    fontSize: 15,
    paddingLeft: 25,
    paddingTop: 15,
    paddingBottom: 10,
  },
  matchedText: {
    color: '#8e8e8e',
  },
});

const DetailPage = ({ navigation, route = {} }) => {
  const { item } = route.params;

  const [dibsOn, setDibs] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View style={styles.container}>
          <TopContainer>
            <LeftArrowButton color="#fff" navigation={navigation} />
            <LinearGradient
              colors={['#a3dcf3', '#95d4ed', '#7bc7e6']}
              style={styles.linearGradientBigBubble}
            />
            <LinearGradient
              colors={['#a3dcf3', '#95d4ed', '#7bc7e6']}
              style={styles.linearGradientBubble}
            />
          </TopContainer>
          <DetailContainer>
            <CircleAvatar />
            <ScrollView>
              <View style={{ paddingLeft: 13 }}>
                <DetailTitle>
                  {item.mantto_talent}
                  {' '}
                  만또
                  {' '}
                  {item.nickname}
                </DetailTitle>
                <StarsIcon />
                <Text style={styles.comments}>
                  {item.intro}
                </Text>
              </View>
              <Text style={styles.miniTitle}>{item.mantto_talent}</Text>
              <View style={styles.levelContainer}>
                <Text
                  style={item.self_grade === 'A' ? styles.activeLevel : styles.inActiveLevel}
                >
                  조금 알아
                </Text>
                <Text
                  style={item.self_grade === 'B' ? styles.activeLevel : styles.inActiveLevel}
                >
                  나쁘지 않아
                </Text>
                <Text
                  style={item.self_grade === 'C' ? styles.activeLevel : styles.inActiveLevel}
                >
                  잘하는 듯
                </Text>
              </View>
              <Text style={styles.miniTitle}>과제 / 시험</Text>
              <View style={styles.assignOrExamContainer}>
                {item.report_help ? (
                  <View style={styles.assignOrExam}>
                    <Text style={styles.assignOrExamText}>만또한테 과제 물어봐</Text>
                    <CheckEntypo name="check" size={25} />
                  </View>
                ) : null}
                {item.exam_help ? (
                  <View style={styles.assignOrExam}>
                    <Text style={styles.assignOrExamText}>만또한테 시험 물어봐</Text>
                    <CheckEntypo name="check" size={25} />
                  </View>
                ) : null}
                {!item.report_help && !item.exam_help ? (
                  <View style={styles.assignOrExam}>
                    <Text style={styles.assignOrExamText}>과제 시험 아직 봐줄 시간이 없네요ㅠ</Text>
                    <CheckEntypo name="check" size={25} />
                  </View>
                ) : null}
              </View>
              <Text style={styles.miniTitle}>매칭 수</Text>
              <View style={styles.matchedNumberContainer}>
                <Text style={styles.matchedNumber}>
                  {item.matching_count}
                  명
                </Text>
                {item.matching_count > 10 ? (
                  <Text style={styles.matchedText}>"능숙한 만또 나만 따라와"</Text>
                ) : (
                  <Text style={styles.matchedText}>"열정 가득한 만또 나만 따라와"</Text>
                )}
              </View>
            </ScrollView>
          </DetailContainer>
        </View>
        <View style={styles.bottomContainer}>
          <HeartIcon dibsOn={dibsOn} setDibs={setDibs} />
          <TouchableOpacity
            style={styles.chatGoButton}
            onPress={() => navigation.navigate('ChattingPage')}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>채팅하기</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DetailPage;

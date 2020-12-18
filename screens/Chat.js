import React, { useEffect } from 'react';

import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadChatList,
} from './actions/index';

import TabNav from './components/TabNav';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 30,
  },
  chatContainer: {
    marginBottom: 28,
  },
  nicknameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nickname: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
  },
  date: {
    color: '#b4b4b4',
  },
});

const Chat = ({ navigation }) => {
  const dispatch = useDispatch();

  const { chats } = useSelector((state) => ({
    chats: state.MyPageReducer.chats,
  }));

  useEffect(() => {
    dispatch(loadChatList());
  }, []);

  return (
    <>
      <TabNav navigation={navigation} text="채팅 목록" />
      <ScrollView style={styles.container}>
        {chats.map(({
          id, contents, nickname, date,
        }) => (
          <View key={id} style={styles.chatContainer}>
            <View style={styles.nicknameContainer}>
              <Text style={styles.nickname}>{nickname}</Text>
              <Text style={styles.date}>{date}</Text>
            </View>
            <Text style={styles.content}>{contents}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Chat;

import React, { useEffect } from 'react';

import {
  View, Text, Button, ScrollView, StyleSheet, Platform,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadChatList,
} from './actions/index';

const styles = StyleSheet.create({
  topNav: {
    flex: 0.1,
    alignItems: 'center',
    borderBottomWidth: 6,
    backgroundColor: '#fff',
    borderColor: '#f6f6f8',
  },
  topNavTitle: {
    fontSize: 20,
    margin: 15,
  },
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
  circleButton: {
    flex: 0.1,
    borderRadius: 50,
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'red',
    ...Platform.select({
      ios: {
        shadowColor: '#d4d4d4',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 5,
      },
    }),
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
      <View style={styles.topNav}>
        <Text style={styles.topNavTitle}>채팅 목록</Text>
      </View>
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
      <View style={styles.circleButton} />
    </>
  );
};

export default Chat;

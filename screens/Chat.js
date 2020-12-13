import React, { useEffect } from 'react';

import {
  View, Text, Button, ScrollView, StyleSheet,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadChatList,
} from './actions/index';

// import chat from '../data.json';

const Chat = ({ navigation }) => {
  const dispatch = useDispatch();

  const { chatList } = useSelector((state) => ({
    chatList: state.MyPageReducer.chatList,
  }));

  useEffect(() => {
    dispatch(loadChatList());
  }, []);

  console.log(chatList);

  return (
    <ScrollView>
      <View style={styles.upperContainer}>
        <Text>채팅목록</Text>
      </View>

      <View style={styles.chatContainer}>
        <Text>chat</Text>
      </View>
      <View>
        <Text> Chat </Text>
        <Button title="Chat" onPress={() => navigation.navigator()} />
      </View>
    </ScrollView>
  );
};

export default Chat;

const styles = StyleSheet.create({

  upperContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  chatContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: 10,

  },

});

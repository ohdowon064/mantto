import React from 'react';
import { View, Text, Button } from 'react-native';

const Chat = ({ navigation }) => (
  <View>
    <Text> Chat </Text>
    <Button title="Chat" onPress={() => navigation.navigator()} />
  </View>
);

export default Chat;

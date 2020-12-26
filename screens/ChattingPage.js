import React, { useState } from 'react';

import {
  SafeAreaView, StyleSheet, TextInput,
} from 'react-native';

import TabNav from './components/TabNav';
import ChatMessage from './components/ChatMessage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});

function ChattingPage({ navigation }) {
  const [typingValue, setTypingValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TabNav navigation={navigation} />
      <ChatMessage manttoOrMantti="mantto" mine text="만또님 언제가 제일 괜찮으세요?" />
      <ChatMessage manttoOrMantti="mantto" mine={false} text="저는 월,수,금 오전 제외하고 다 괜찮아요!" />
      <ChatMessage manttoOrMantti="mantti" mine text="만또님 언제가 제일 괜찮으세요?" />
      <ChatMessage manttoOrMantti="mantti" mine={false} text="저는 월,수,금 오전 제외하고 다 괜찮아요!" />
      <TextInput
        onChangeText={(text) => setTypingValue(text)}
        value={typingValue}
      />
    </SafeAreaView>
  );
}

export default ChattingPage;

import React, { useCallback } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

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

function AlertsPage({ navigation }) {
  const supportedURL = 'https://google.com';

  const handlePress = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL : ${url}`);
    }
  }, [supportedURL]);
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#fff',
    }}
    >
      <TabNav text="알림 목록" navigation={navigation} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 20,
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <View style={styles.alertContainer}>
          <View style={styles.nicknameContainer}>
            <Text style={styles.nickname}>만또 공지</Text>
            <Text style={styles.date}>12/12 17:32</Text>
          </View>
          <Text style={styles.content}>업데이트 완료했습니다.</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#3b86ff',
              borderRadius: 10,
              marginTop: 10,
              padding: 10,
              alignItems: 'center',
            }}
            onPress={() => handlePress(supportedURL)}
          >
            <Text style={{
              fontSize: 14,
              color: '#fff',
            }}
            >
              공지확인
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
}

export default AlertsPage;

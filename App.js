import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import LoginForm from './LoginForm';

const App = () => {
  const fetchLogin = async () => {
    const url = '';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const [id, password] = useState({id: 0, password: ''});

  const {fetchedId, fetchedPassword} = fetchLogin();
  if (id === fetchedId && password === fetchedPassword) {
    return (
      <>
        <div>로그인 되었습니다.</div>
      </>
    );
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View style={styles.container}>
          <ScrollView>
            <LoginForm />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 20,
  },
  innerText: {
    color: '#edb08c',
  },
  body: {
    flex: 1,
    backgroundColor: '#ece8e5',
  },
  container: {
    marginTop: 60,
    flex: 1,
  },
  buttonLeft: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textInputCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 20,
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    fontSize: 12,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  dot: {
    marginRight: 10,
  },
});

export default App;

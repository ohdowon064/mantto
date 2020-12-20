import React from 'react';

import {
  SafeAreaView,
  Text, TouchableOpacity, View,
} from 'react-native';

import LoginInputContainer from './components/LoginInputContainer';
import TabNav from './components/TabNav';

const LoginPage = ({ navigation }) => (
  <SafeAreaView style={{
    flex: 1,
    backgroundColor: '#fff',
  }}
  >
    <TabNav navigation={navigation} text="" />
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 13,
      paddingLeft: 17,
    }}
    >
      <View style={{
        marginTop: 17,
        marginBottom: 17,
      }}
      >
        <Text style={{
          fontSize: 28,
          fontWeight: '800',
        }}
        >
          로그인
        </Text>
      </View>
      <View style={{
        flexDirection: 'row',
      }}
      >
        <Text style={{
          color: '#9ca5b4',
        }}
        >
          만또계정이 없으시나요?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpFirstPage')}
        >
          <Text style={{
            marginLeft: 5,
            color: '#73ccef',
            fontWeight: '800',
            borderBottomWidth: 1.5,
            borderColor: '#73ccef',
          }}
          >
            가입하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <LoginInputContainer />
  </SafeAreaView>
);

export default LoginPage;

import React from 'react';

import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';

import { Button } from 'react-native-elements';

import StarsIcon from './src/Icons/StarsIcon';

const Profile = ({ navigation }) => {
  function handleRegisterClick() {
    navigation.navigate('TalentRegisterPage');
  }
  return (
    <View style={styles.fullScreen}>
      <View style={styles.upperContainer}>
        <View style={{
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Image
          // style={styles.}
            source={require('./src/images/people.png')}
          />
        </View>
        <View style={{
          marginLeft: 10,
        }}
        >
          <Text style={styles.nameText}>이예나</Text>
          <StarsIcon />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View>
          <TouchableOpacity
            onPress={() => {}}
          >
            <Image source={require('./src/images/interest.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 13, textAlign: 'center', color: '#080040' }}>관심 목록</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {}}
          >
            <Image source={require('./src/images/ticket.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 13, textAlign: 'center', color: '#080040' }}>교환권</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => handleRegisterClick()}
          >
            <Image
              source={require('./src/images/list.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 13, textAlign: 'center', color: '#080040' }}>재능 등록</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#fff',
          marginBottom: 10,
        }}
        >
          <Button
            title="작성 후기"
            titleStyle={{ color: '#080040' }}
            buttonStyle={styles.listButton}
            onPress={() => { }}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#fff',
          marginBottom: 10,
        }}
        >
          <Button
            title="채팅 목록"
            titleStyle={{ color: '#080040' }}
            buttonStyle={styles.listButton}
            onPress={() => { }}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#fff',
          marginBottom: 10,
        }}
        >
          <Button
            title="알람 목록"
            titleStyle={{ color: '#080040' }}
            buttonStyle={styles.listButton}
            onPress={() => { }}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#fff',
          marginBottom: 10,
        }}
        >
          <Button
            title="설정"
            titleStyle={{ color: '#080040' }}
            buttonStyle={styles.listButton}
            onPress={() => { }}
          />
        </View>
      </View>
      <View>
        {/* <Button title= "Profile" onPress={ () => navigation.navigator()}/> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
  },
  upperContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: 162,
    marginTop: 69,
    marginBottom: 8,
  },
  middleContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 124,
    flexDirection: 'row',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  circleButton: {
    width: 61,
    height: 61,
    borderRadius: 50,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  listButton: {
    marginLeft: 15,
    marginBottom: 5,
    height: 56,
    backgroundColor: 'white',
  },
});

export default Profile;

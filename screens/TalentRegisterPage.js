/* eslint-disable no-undef */
import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { useDispatch } from 'react-redux';

import { RFPercentage } from 'react-native-responsive-fontsize';

import Toggle from 'react-native-toggle-element';

import ProgressBar from 'react-native-progress/Bar';

import StarsIcon from './src/Icons/StarsIcon';

import DropdownContainer from './components/DropdownContainer';

import TabNav from './components/TabNav';

import {
  setRegisterUserInfo,
  requestUserRegisterPatch,
} from './actions/index';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f6f6f8',
  },
  upperContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 162,
    marginBottom: 8,
    paddingTop: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  firstTalentInsertContainer: {
    paddingTop: 10,
    marginTop: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
  secondTalentInsertContainer: {
    paddingTop: 10,
    marginTop: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    height: 250,
  },
  talentInsertTitle: {
    fontSize: 18,
    paddingLeft: 12,
    fontWeight: '700',
  },
  talentInsertCount: {
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: '#e9e9f0',
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
  },
  textArea: {
    justifyContent: 'flex-start',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  genderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  assignTestContainer: {
    flex: 1,
    width: '100%',
    height: 180,
    paddingTop: 10,
    marginTop: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
  completeButton: {
    width: 200,
    height: 44,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 8,
    backgroundColor: '#3b86ff',
    borderRadius: 10,
  },
  bottomCompleteButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 215,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 12.5,
    backgroundColor: '#FFFFFF',
  },
  talentExplainContainer: {
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  talentExplainText: {
    color: 'black',
    fontSize: 13,
    lineHeight: 15,
  },
  specialText1: {
    color: '#80BFD7',
    fontSize: 13,
  },
  specialText2: {
    color: '#EAA786',
    fontSize: 13,
  },
  askToManttoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(233,233,240)',
    width: 338,
    height: 40,
    marginTop: 11,
    marginLeft: 10,
  },
});

const TalentRegisterPage = ({ navigation, route = {} }) => {
  const dispatch = useDispatch();

  const { loginUserInfo } = route.params;

  const [value, setText] = useState(loginUserInfo.intro);

  const [assignIsEnabled, setAssignIsEnabled] = useState(false);

  const [testIsEnabled, setTestIsEnabled] = useState(false);

  const assignToggleSwitch = () => setAssignIsEnabled((previousState) => !previousState);

  const testToggleSwitch = () => setTestIsEnabled((previousState) => !previousState);

  function handleRegister() {
    const registerUser = {
      intro: value,
      reportHelp: assignIsEnabled,
      examHelp: testIsEnabled,
    };
    dispatch(setRegisterUserInfo(registerUser));

    dispatch(requestUserRegisterPatch());
    navigation.goBack();
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <TabNav text="재능 등록" navigation={navigation} />
        <ScrollView>
          <View style={styles.upperContainer}>
            <View style={{
              alignSelf: 'center',
              paddingBottom: 10,
            }}
            >
              <ProgressBar progress={0.3} width={200} />
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            >
              <View style={{
                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <Image
                  source={require('./src/images/people.png')}
                />
              </View>
              <View style={{
                marginLeft: 10,
              }}
              >
                <Text style={styles.nameText}>
                  {loginUserInfo.nickname}
                  <Text style={styles.genderText}>
                    {' '}
                    (
                    {loginUserInfo.gender}
                    )
                  </Text>
                  {' '}
                </Text>
                <StarsIcon />
              </View>
            </View>
          </View>
          <View style={styles.firstTalentInsertContainer}>
            <Text style={styles.talentInsertTitle}>재능 기입</Text>
            <View style={styles.talentExplainContainer}>
              <Text style={styles.talentExplainText}>
                {' '}
                나의
                <Text style={styles.specialText1}> 재능</Text>
                은
              </Text>
              <DropdownContainer
                style={styles.textInput}
                label="My talent"
                talent={loginUserInfo.mantto_talent}
              />
              <Text style={styles.talentExplainText}>입니다.</Text>
            </View>
            <View style={styles.talentExplainContainer}>
              <Text style={styles.talentExplainText}>
                {' '}
                나의
                <Text style={styles.specialText2}> 열정</Text>
                은
              </Text>
              <DropdownContainer
                style={styles.textInput}
                label="My Passion"
                talent={loginUserInfo.mantti_talent}
              />
              <Text style={styles.talentExplainText}>입니다.</Text>
            </View>
          </View>
          <View style={styles.secondTalentInsertContainer}>
            <Text style={styles.talentInsertTitle}>재능 기입</Text>
            <Text style={styles.talentInsertCount}>0/100자</Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                placeholder="Type something"
                value={value}
                onChangeText={(inputText) => setText(inputText)}
                maxLength={100}
                numberOfLines={7}
                multiline
              />
            </View>
          </View>
          {/* {3번째} */}
          <View style={styles.assignTestContainer}>
            <Text style={styles.talentInsertTitle}>과제 / 시험</Text>
            <View style={styles.askToManttoContainer}>
              <Text style={{ fontSize: 15 }}>만또한테 과제 물어봐</Text>
              <Toggle
                value={assignIsEnabled}
                onPress={assignToggleSwitch}
                trackBar={{
                  width: 65,
                  height: 30,
                  activeBackgroundColor: '#3b86ff',
                  inActiveBackgroundColor: '#b8bbc6',
                }}
                thumbButton={{
                  width: 35,
                  height: 30,
                  activeBackgroundColor: '#f8f8f8',
                  inActiveBackgroundColor: '#f8f8f8',
                }}
                leftTitle={assignIsEnabled ? '공개' : ''}
              />

            </View>
            <View style={styles.askToManttoContainer}>
              <Text style={{ fontSize: 15 }}>만또한테 시험 물어봐</Text>
              <Toggle
                value={testIsEnabled}
                onPress={testToggleSwitch}
                trackBar={{
                  width: 65,
                  height: 30,
                  activeBackgroundColor: '#3b86ff',
                  inActiveBackgroundColor: '#b8bbc6',
                }}
                thumbButton={{
                  width: 35,
                  height: 30,
                  activeBackgroundColor: '#f8f8f8',
                  inActiveBackgroundColor: '#f8f8f8',
                }}
                leftTitle={testIsEnabled ? '공개' : ''}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomCompleteButton}>
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => handleRegister()}
          >
            <Text style={styles.btnText}>작성완료</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default TalentRegisterPage;

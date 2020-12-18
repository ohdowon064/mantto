import React from 'react';

import {
  StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, Platform,
} from 'react-native';

import StarsIcon from './src/Icons/StarsIcon';

import { LeftArrowButton } from './components/Button';
import TopNavContainer from './components/TopNavContainer';

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#73ccef',
  },
  topContainer: {
    flex: 0.1,
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f6f6f8',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
  upperContainer: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 8,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  middleContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '94%',
    height: 124,
    flexDirection: 'row',
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  nameText: {
    fontSize: 20,
  },
  circleButton: {
    width: 61,
    height: 61,
    borderRadius: 50,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
    width: '94%',
  },
  list: {
    paddingTop: 5,
    fontSize: 13,
    textAlign: 'center',
    color: '#080040',
  },
  categories: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  category: {
    padding: 20,
    fontSize: 20,
    color: '#000',
  },
});

const Profile = ({ navigation }) => (
  <SafeAreaView style={styles.fullScreen}>
    <View style={styles.topContainer} />
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <TopNavContainer title="마이페이지" navigation={navigation} />
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
      </View>
      <View style={styles.middleContainer}>
        <View>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => navigation.navigate('WatchListPage')}
          >
            <Image source={require('./src/images/interest.png')} />
          </TouchableOpacity>
          <Text style={styles.list}>관심 목록</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => {}}
          >
            <Image source={require('./src/images/ticket.png')} />
          </TouchableOpacity>
          <Text style={styles.list}>교환권</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => navigation.navigate('TalentRegisterPage')}
          >
            <Image
              source={require('./src/images/list.png')}
            />
          </TouchableOpacity>
          <Text style={styles.list}>재능 등록</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <TouchableOpacity
          style={styles.categories}
          onPress={() => navigation.navigate('AlertsPage')}
        >
          <Text style={styles.category}>알림</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categories}
          onPress={() => navigation.navigate('Chat')}
        >
          <Text style={styles.category}>채팅 목록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categories}
          onPress={() => navigation.navigate('AppSettingsPage')}
        >
          <Text style={styles.category}>앱 설정</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

export default Profile;

import React from 'react';

import {
  StyleSheet, View, Text, SafeAreaView, Image,
} from 'react-native';

import MapMarkerItem from './components/MapMarkerItem';

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
  nameText: {
    fontSize: 20,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
    width: '100%',
  },
  chatContainer: {
    flexDirection: 'row',
    marginBottom: 28,
    padding: 10,
  },
  nicknameContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  nickname: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    paddingLeft: 10,
  },
  content: {
    fontSize: 14,
    paddingLeft: 10,
  },
  date: {
    flex: 0.3,
    color: '#000',
  },

});

const ReviewPage = ({ navigation }) => (
  <SafeAreaView style={styles.fullScreen}>
    <View style={styles.topContainer} />
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
        >
          <MapMarkerItem color="#72cbee" textColor="#fff" />
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={{ backgroundColor: '#20bff9', width: '100%', height: 5 }} />
        <View style={styles.chatContainer}>
          <View style={styles.nicknameContainer}>
            <Image source={require('./src/images/people.png')} />
            <View style={{ height: '100%' }}>
              <Text style={styles.nickname}>만또</Text>
              <Text style={styles.content}>블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라</Text>
            </View>
          </View>
          <Text style={styles.date}>2020.09.11</Text>
        </View>
        <View style={styles.chatContainer}>
          <View style={styles.nicknameContainer}>
            <Image source={require('./src/images/people.png')} />
            <View style={{ height: '100%' }}>
              <Text style={styles.nickname}>만띠</Text>
              <Text style={styles.content}>블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라</Text>
            </View>
          </View>
          <Text style={styles.date}>2020.09.12</Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
);

export default ReviewPage;

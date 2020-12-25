import React, { useState } from 'react';

import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const styles = StyleSheet.create({
  titleContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  explainText: {
    color: 'rgb(155,155,155)',
    fontSize: 15,
    marginTop: 20,
  },
});

const CountDownClock = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 27 }}> 재능워치</Text>
        <Text style={styles.explainText}> 한 시간동안 자유롭게 재능을 공유하세요.</Text>
      </View>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        size={250}
        duration={3600}
        colors={[
          ['#20bff9', 0.3],
          ['#2cc2dc', 0.4],
          ['#ffb18b', 0.2],
        ]}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.View style={{ color: animatedColor }}>
            <Text style={{ color: '#9b9b9b' }}>남은 시간</Text>
            <Text style={{ fontSize: 15, color: '#3e4a59' }}>
              <Text style={{ fontSize: 50, color: '#3e4a59' }}>
                {
                  Math.floor(remainingTime / 60) < 10
                    ? `0${Math.floor(remainingTime / 60)}`
                    : Math.floor(remainingTime / 60)
                }
              </Text>
              min
              <Text style={{ fontSize: 50, color: '#3e4a59' }}>:</Text>
              <Text style={{ fontSize: 50, color: '#3e4a59' }}>
                {remainingTime % 60 < 10 ? `0${remainingTime % 60}` : remainingTime % 60}
              </Text>
              sec
            </Text>
          </Animated.View>
        )}
      </CountdownCircleTimer>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#20bff9',
          width: 70,
          height: 30,
          margin: 10,
          borderRadius: 20,
        }}
        onPress={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <Text>멈춤</Text> : <Text>시작</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20 }}
      >
        <Text style={{ fontSize: 15, color: 'rgb(155,155,155)' }}>
          취소하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountDownClock;

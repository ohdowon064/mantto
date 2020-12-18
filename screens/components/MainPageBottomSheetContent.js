import React from 'react';

import {
  View,
  Text,
  Platform,
} from 'react-native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { Button } from 'react-native-elements';

import { ScrollView } from 'react-native-gesture-handler';

import TalentCategory from './TalentCategory';

function Bar({ color }) {
  return (
    <View style={{
      alignSelf: 'center',
      backgroundColor: color,
      width: 80,
      height: 2.5,
      borderRadius: 1,
      marginBottom: 15,
    }}
    />
  );
}

const MainPageBottomSheetHeader = ({ color }) => (
  <View
    style={{
      backgroundColor: 'white',
      paddingTop: 10,
      borderTopWidth: 3,
      borderColor: 'rgba(0,0,0,.02)',
      borderRadius: 30,
      ...Platform.select({
        ios: {
          shadowColor: 'rgb(50, 50, 50)',
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowOffset: {
            height: -1,
            width: 0,
          },
        },
        android: {
          elevation: 5,
        },
      }),
    }}
  >
    <Bar color={color} />
    <View style={{
      padding: 10,
    }}
    >
      <Text style={{
        fontSize: 18,
      }}
      >
        지금 최고의 만또는? #지최만
      </Text>
    </View>
    <View style={{
      backgroundColor: '#f7f7f8',
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
        <Button
          type="clear"
          icon={<IconAntDesign name="left" size={20} color="#808495" />}
          onPress={() => {}}
        />
        <Text style={{
          fontSize: 17,
          padding: 5,
        }}
        >
          디자인
        </Text>
        <Text style={{
          fontSize: 12,
          color: '#b8bbc6',
        }}
        >
          126명의 만또
        </Text>
      </View>
      <Button
        type="clear"
        icon={<IconAntDesign name="right" size={20} color="#808495" />}
        onPress={() => {}}
      />
    </View>
  </View>
);

function MainPageBottomSheetContent({ color, navigation }) {
  return (
    <ScrollView style={{
      height: 600,
      backgroundColor: '#fff',
    }}
    >
      <TalentCategory color={color} navigation={navigation} />
    </ScrollView>
  );
}

export {
  MainPageBottomSheetContent,
  MainPageBottomSheetHeader,
};

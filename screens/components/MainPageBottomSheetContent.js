import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { Button } from 'react-native-elements';

import { ScrollView } from 'react-native-gesture-handler';
import TalentCategory from './TalentCategory';

const renderContent = () => (
  <View
    style={{
      backgroundColor: 'white',
      paddingTop: 15,
      height: 600,
    }}
  >
    <View style={{
      padding: 10,
    }}
    >
      <Text style={{
        fontSize: 20,
      }}
      >
        부산대 최고의 만또를 찾아서
      </Text>
    </View>
    <View style={{
      backgroundColor: '#f7f7f8',
      padding: 9,
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
          icon={<IconAntDesign name="left" size={15} color="#000000" />}
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
        icon={<IconAntDesign name="right" size={15} color="#000000" />}
        onPress={() => {}}
      />
    </View>
    <ScrollView>
      <TalentCategory />
    </ScrollView>
  </View>
);

export default renderContent;

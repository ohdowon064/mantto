import React from "react";
import {View,Text,Button} from "react-native";

const Home = ({navigation}) => (
   <View>
     <Text> Home </Text>
     <Button title= "Home" onPress={ () => navigation.navigator()}/>
   </View>
);

export default Home;
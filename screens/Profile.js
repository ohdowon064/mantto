import React from "react";

import { StyleSheet, View, Text} from "react-native";

import { Button } from 'react-native-elements';

import StarsIcon from './src/Icons/StarsIcon';
// {navigation}
const Profile = () => {
  return (
    <View style={styles.fullScreen}>
      <View style={styles.upperContainer}>
        <View style={{ 
          width : 100, 
          height : 100, 
          backgroundColor : 'red' 
        }}></View>
        <View style={{
          marginLeft : 10,
        }}>
          <Text style={styles.nameText}>이예나</Text>
          <StarsIcon/>
        </View>
      </View>
        <View style={styles.middleContainer}>
           <View>
              <Button
                 title="관심목록"
                 buttonStyle={styles.circleButton}
                 onPress={ ()=> { }}/>
                <Text style={{ fontSize: 13,textAlign : 'center' }} >관심 목록</Text> 
           </View>
           <View>
              <Button
                 title="교환권"
                 buttonStyle={styles.circleButton}
                 onPress={ ()=> { }}/>
                <Text style={{ fontSize: 13, textAlign : 'center' }} >교환권</Text> 
           </View>
           <View>
              <Button
                 title="재능 등록"
                 buttonStyle={styles.circleButton}
                 onPress={ ()=> { }}/>
                <Text style={{ fontSize: 13, textAlign : 'center' }} >재능 등록</Text> 
           </View>
        </View>
        <View style={styles.listContainer}>
          <View style={{ flexDirection : 'row', width : '100%', backgroundColor : '#fff' 
          ,marginBottom : 10,
        }}>
            <Button 
              title="작성 후기"
              titleStyle={{ color : '#080040'}}
              buttonStyle={styles.listButton}
              onPress={ () => { }}
              />
          </View>

          <View style={{ flexDirection : 'row', width : '100%', backgroundColor : '#fff' 
          ,marginBottom : 10,
        }}>
            <Button 
              title="채팅 목록"
              titleStyle={{ color : '#080040'}}
              buttonStyle={styles.listButton}
              onPress={ () => { }}
              />
          </View>
          <View style={{ flexDirection : 'row', width : '100%', backgroundColor : '#fff' 
          ,marginBottom : 10,
        }}>
            <Button 
              title="알람 목록"
              titleStyle={{ color : '#080040'}}
              buttonStyle={styles.listButton}
              onPress={ () => { }}
              />
          </View>
          <View style={{ flexDirection : 'row', width : '100%', backgroundColor : '#fff' 
          ,marginBottom : 10,
        }}>
            <Button 
              title="설정"
              titleStyle={{ color : '#080040'}}
              buttonStyle={styles.listButton}
              onPress={ () => { }}
              />
          </View>
        </View>
      <View>
       <Text> Profile </Text>
        {/* <Button title= "Profile" onPress={ () => navigation.navigator()}/> */}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  fullScreen:{
    backgroundColor:'rgb(128,191,215)',
    flex:1,
    alignItems:"center",
  },
  upperContainer:{
    flexDirection : 'row',
    backgroundColor:"white",
    alignItems:"center",
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    width: '100%',
    height:162,
    marginTop:69,
    marginBottom:8
  },
  middleContainer:{
   backgroundColor:"white",
   alignItems:"center",
   justifyContent:"space-around",
   width: '100%',
   height:124,
   flexDirection:"row"
  },
  nameText:{
    fontWeight: 'bold',
    fontSize: 24
  },
  circleButton:{
    width: 61,
    height: 61,
    borderRadius:50
  },
  listContainer:{
    flex: 1,
    width:'100%',
    marginTop:10,
  },
  listButton:{
    marginLeft : 15,
    marginBottom : 5,
    height: 56,
    backgroundColor:'white'
  }
})



export default Profile;
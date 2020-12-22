import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  Platform,
  PermissionsAndroid,
} from 'react-native';

import NaverMapView, {
  Circle, Marker, Path, Polyline, Polygon,
} from 'react-native-nmap';

import Geolocation from 'react-native-geolocation-service';

import styled from 'styled-components/native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const SearchCategories = styled.View`
    height : 85px;
    flex-direction : row;
    align-items : center;
    padding-left : 5%;
`;

const SearchButton = styled.TouchableOpacity`
    border-radius : 10px;
    align-items : center;
    justify-content : center;
    width : 18%;
    height : 50%;
    font-size : 14px;
    background-color : #73ccef;
`;

const SearchInputContainer = styled.View`
    flex-direction : row;
    align-items : center;
    background-color : rgba(118,118,118,0.1);
    width : 75%;
    height : 50%;
    margin-left : 6.89px;
    padding-left : 12px;
    border-radius : 10px;
`;

const SearchTextInput = styled.TextInput`
    width : 75%;
    font-size : 18px;
    padding : 7px;
`;

async function requestPermissions() {
  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization();
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
    });
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
}

function MyMap() {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, []);

  const { latitude, longitude } = location;

  const P0 = { latitude, longitude };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchCategories>
        <SearchButton
          onPress={() => {}}
        >
          <Text style={{ color: '#fff' }}>목록</Text>
        </SearchButton>
        <SearchInputContainer>
          <AntDesignIcon name="search1" size={18} />
          <SearchTextInput placeholder="검색" placeholderTextColor="#3c3c43" />
        </SearchInputContainer>
      </SearchCategories>
      <NaverMapView
        style={{ flex: 1 }}
        showsMyLocationButton
        center={{ ...P0, zoom: 16 }}
        onTouch={(e) => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
        onCameraChange={(e) => console.warn('onCameraChange', JSON.stringify(e))}
        onMapClick={(e) => console.warn('onMapClick', JSON.stringify(e))}
      >
        <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')} />
      </NaverMapView>
    </SafeAreaView>
  );
}

export default MyMap;

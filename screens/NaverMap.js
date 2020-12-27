import React, { useEffect, useState, useRef } from 'react';

import {
  View,
  SafeAreaView,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import NaverMapView, {
  Circle, Marker, Path, Polyline, Polygon,
} from 'react-native-nmap';

import Geolocation from 'react-native-geolocation-service';

import BottomSheet from 'reanimated-bottom-sheet';

import MapMarkerItem from './components/MapMarkerItem';

import SearchCategoriesContainer from './components/SearchCategoriesContainer';

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

function NaverMap({ navigation, route = {} }) {
  // 유저가 맵에 들어올 때, 해당 위,경도 값 Patch 해줘야한다.
  // 테스트 용으로는 일단 위,경도 조작해서 만들자.
  const { category } = route.params;

  const dispatch = useDispatch();

  const { loginUserInfo, userList, userTalentList } = useSelector((state) => ({
    loginUserInfo: state.LoginReducer.loginUserInfo,
    userList: state.talentCategoriesReducer.userList,
    userTalentList: state.talentCategoriesReducer.userTalentList,
  }));

  const selectedTalentList = userTalentList.find((list) => list.talent === category);

  const { manttiz, manttoz } = selectedTalentList;

  console.log(manttiz, manttoz);

  const points = [];
  // 유저 정보에서 위,경도, id 만 따로 나타냄, 가공...
  userList.forEach(({ latitude, longtitude, id }) => {
    const numberedLatitude = Number(latitude);
    const numberedLongitude = Number(longtitude);
    points.push({
      coords: { latitude: numberedLatitude, longitude: numberedLongitude },
      userId: id,
    });
  });

  const [zIndex, setZIndex] = useState(-1);

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  const sheetRef = useRef(null);

  const keyboardDidShow = () => {
    if (sheetIsOpen) {
      sheetRef.current.snapTo(0);
    }
    setZIndex(-1);
  };

  useEffect(() => {
    try {
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
      Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    } catch (e) {
      console.log(e);
    }

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
    };
  }, []);

  const { latitude, longitude } = location;

  const P0 = { latitude, longitude };

  const PnuPoint = {
    latitude: 35.233608677589096,
    longitude: 129.0810905287946,
  };

  function handleBottomSheet() {
    if (sheetIsOpen) {
      sheetRef.current.snapTo(0);
    }
    setSheetIsOpen(false);

    setZIndex(-1);
  }

  function handleOpacity() {
    if (sheetIsOpen) {
      sheetRef.current.snapTo(0);
    }
    setSheetIsOpen(false);

    setZIndex(-1);
  }

  const [userId, setUserId] = useState(0);

  function handleClickMarker(Id) {
    sheetRef.current.snapTo(250);

    setSheetIsOpen(true);

    setZIndex(10);

    setUserId(Id);
  }

  const renderContent = () => (
    <View style={{
      backgroundColor: '#fff',
      padding: 16,
      width: '100%',
      height: 500,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    }}
    >
      {
        userId !== 0
          ? <MapMarkerItem navigation={navigation} userList={userList} userId={userId} />
          : null
      }
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchCategoriesContainer navigation={navigation} text="목록" />
      <View
        style={{
          position: 'relative',
          flex: 1,
        }}
      >
        <NaverMapView
          style={{ flex: 1 }}
          showsMyLocationButton
          center={{ ...PnuPoint, zoom: 16 }}
        >
          {points.map(({ coords, userId }) => (
            <Marker
              key={userId}
              coordinate={coords}
              onClick={() => handleClickMarker(userId)}
              image={require('./src/images/logo.png')}
              width={30}
              height={30}
            />
          ))}
        </NaverMapView>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,.2)',
            width: '100%',
            height: '100%',
            zIndex,
          }}
          onPress={() => handleOpacity()}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['-50%', '-50%', '20%']}
        borderRadius={30}
        renderHeader={renderContent}
        onOpenEnd={() => setSheetIsOpen(true)}
        onCloseEnd={() => handleBottomSheet()}
      />
    </SafeAreaView>
  );
}

export default NaverMap;

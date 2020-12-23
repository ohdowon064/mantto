import React from 'react';

import {
  Text,
} from 'react-native';

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

function SearchCategoriesContainer({ navigation, text }) {
  return (
    <SearchCategories>
      <SearchButton
        onPress={() => navigation.navigate('ManttoLists')}
      >
        <Text style={{ color: '#fff' }}>{text}</Text>
      </SearchButton>
      <SearchInputContainer>
        <AntDesignIcon name="search1" size={18} />
        <SearchTextInput placeholder="검색" placeholderTextColor="#3c3c43" />
      </SearchInputContainer>
    </SearchCategories>
  );
}

export default SearchCategoriesContainer;

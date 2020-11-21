import React from "react";

import styled from "styled-components/native";

import { View, Text, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import MainPageLayout from "./layouts/MainPageLayout";

import CategoryItem from './components/CategoryItem';

const SearchContainer = styled.View`
    flex : 1;
    flex-direction : row;
    padding-top : 50px;
    padding-left : 16px;
`;

const CategoryTitle = styled.Text`
    margin-top : 25px;
    margin-bottom : 27px;
    margin-left : 39px;
    font-size : 21px;
`;

// 62 + 48 62 + 48

const CategoryContainer = styled.View`
    justify-content : space-between;
    flex-wrap : wrap;
    margin-left : 25px;
    margin-right : 25px;
`;

const ScrollContainer = styled.View`
    background : blue;
`;

const BottomMenuContainer = styled.View`
    background : pink;
    flex : 0.1;
`;

const SearchInputContainer = styled.View`
    flex-direction : row;
    align-items : center;
    background-color : #FFF;
    width : 220px;
    height : 40px;
    margin-left : 6.89px;
    padding-left : 12px;
`;

const SearchTextInput = styled.TextInput`
    background-color : #FFFFFF;
    width : 220px;
    height : 40px;
`;

const MainPage = () => {
    return (
        <>
            <MainPageLayout>
                <SearchContainer>
                    <Button title='만띠' titleStyle={{ color:'#fff'}} buttonStyle={styles.buttonStyle}/>
                    <SearchInputContainer>
                        <AntDesignIcon name="search1" size={14}/>
                        <SearchTextInput placeholder='검색'/>
                    </SearchInputContainer>
                </SearchContainer>
                <CategoryTitle>카테고리</CategoryTitle>
                <CategoryContainer>
                    <View style={styles.categoryLine}>
                        <CategoryItem imageName={require('./src/images/design.png')} itemTitle={'디자인'}/>
                        <CategoryItem imageName={require('./src/images/programming.png')} itemTitle={'IT/프로그래밍'}/>
                        <CategoryItem imageName={require('./src/images/picture.png')} itemTitle={'영상/사진/음향'}/>
                        <CategoryItem imageName={require('./src/images/photo.png')} itemTitle={'번역/통역'}/>
                    </View>
                    <View style={styles.categoryLine}>
                        <CategoryItem imageName={require('./src/images/market.png')} itemTitle={'마케팅'}/>
                        <CategoryItem imageName={require('./src/images/sports.png')} itemTitle={'스포츠/레저'}/>
                        <CategoryItem imageName={require('./src/images/job.png')} itemTitle={'취업'}/>
                        <CategoryItem imageName={require('./src/images/talk.png')} itemTitle={'운세/상담'}/>
                    </View>
                </CategoryContainer>    
            </MainPageLayout>
            <BottomMenuContainer>
            </BottomMenuContainer>
        </>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width : 50.8,
        height : 40,
        backgroundColor : '#EAA786',
        borderRadius : 5,
    },
    categoryLine: {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between',
    }
  });


export default MainPage;
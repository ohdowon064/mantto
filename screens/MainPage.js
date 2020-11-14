import React from "react";

import styled from "styled-components/native";

import { TouchableHighlight, View, Text, StyleSheet, TextInput ,Image} from 'react-native';

import { Button } from 'react-native-elements';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import MainPageLayout from "./layouts/MainPageLayout";

const SearchContainer = styled.View`
    flex : 1;
    flex-direction : row;
    padding-top : 50px;
    padding-left : 16px;
`;

const CategoryTitle = styled.Text`
    margin-top : 25px;
    margin-bottom : 27px;
    margin-left : 32px;
    font-size : 21px;
`;

// 62 + 48 62 + 48

const CategoryContainer = styled.View`
    flex-direction : row;
    justify-content : space-between;
    flex-wrap : wrap;
    background : yellow;
    margin-left : 32px;
    margin-right : 33px;
    height : 220px;
`;

const CategoryItemContainer = styled.View`
    background-color : red;
    width : 62px;
`;

const CategoryButton = styled.TouchableOpacity`
    background-color : #FFF;
    width : 62px;
    height : 62px;
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
                    <CategoryItemContainer>
                        <CategoryButton>
                            <Image source={require("./src/images/design.svg")}></Image>
                        </CategoryButton>
                        <Text>디자인</Text>
                        <Text>1126명</Text>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <CategoryButton>
                            <Image></Image>
                        </CategoryButton>
                        <Text>디자인</Text>
                        <Text>1126명</Text>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <CategoryButton>
                            <Image></Image>
                        </CategoryButton>
                        <Text>디자인</Text>
                        <Text>1126명</Text>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <CategoryButton>
                            <Image></Image>
                        </CategoryButton>
                        <Text>디자인</Text>
                        <Text>1126명</Text>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <CategoryButton>
                            <Image></Image>
                        </CategoryButton>
                        <Text>디자인</Text>
                        <Text>1126명</Text>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <CategoryButton>
                            <Image></Image>
                        </CategoryButton>
                        <Text>디자인</Text>
                        <Text>1126명</Text>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <CategoryButton>
                            <Image></Image>
                        </CategoryButton>
                        <Text>디자인</Text>
                        <Text>1126명</Text>
                    </CategoryItemContainer>
                    <CategoryItemContainer>
                        <CategoryButton>
                            <Image></Image>
                        </CategoryButton>
                        <Text>디자인</Text>
                        <Text>1126명</Text>
                    </CategoryItemContainer>
                </CategoryContainer>
                    <ScrollContainer>
                        <Text>스크롤 영역</Text>
                    </ScrollContainer>
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
    }
  });


export default MainPage;
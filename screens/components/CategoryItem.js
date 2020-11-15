import React from "react";

import styled from 'styled-components/native';

import { Image, StyleSheet } from 'react-native';

const CategoryItemContainer = styled.View`
    align-items : center;
    width : 83px;
`;

const CategoryButton = styled.TouchableOpacity`
    border : 1px solid #979797;
`;

const CategoryItemText = styled.Text`
    font-weight : 700;
    padding-top : 9px;
    font-size : 13px;
`;

const CategoryItemSemiText = styled.Text`
    color : #B8BBC6;
    font-size : 12px;
    padding-bottom : 12px;
`;

const CategoryItem = ({ imageName, itemTitle }) => {
    return (
        <>
            <CategoryItemContainer>
                <CategoryButton>
                    <Image source={imageName} style={styles.imageStyle}/>
                </CategoryButton>
                <CategoryItemText>{itemTitle}</CategoryItemText>
                <CategoryItemSemiText>1126명의 만또</CategoryItemSemiText>
            </CategoryItemContainer>
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        width : 75,
        height : 75,
    }
})

export default CategoryItem;
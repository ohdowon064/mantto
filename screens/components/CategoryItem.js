import React from 'react';

import styled from 'styled-components/native';

const CategoryItemContainer = styled.View`
    align-items : center;
    width : 83px;
`;

const CategoryButton = styled.TouchableOpacity`
    border-radius : 10px;
`;

const CategoryItemText = styled.Text`
    font-weight : 700;
    padding-top : 9px;
    font-size : 11px;
`;

const CategoryItemSemiText = styled.Text`
    color : #B8BBC6;
    font-size : 10px;
    padding-bottom : 12px;
`;

const CategoryItem = ({ Svg, itemTitle }) => (
  <>
    <CategoryItemContainer>
      <CategoryButton>
        {Svg ? <Svg width={62} height={62} /> : null}
      </CategoryButton>
      <CategoryItemText>{itemTitle}</CategoryItemText>
      <CategoryItemSemiText>1126명의 만또</CategoryItemSemiText>
    </CategoryItemContainer>
  </>
);

export default CategoryItem;

import React from 'react';
import styled from 'styled-components';

import { DEFAULT_CATEGORIES } from '../../config/constants';

const LatestTitle = styled.h5`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #000;
`;
const ButtonExplore = styled.button`
  background: #f6d0e8;
  border-radius: 5px;
  width: 102px;
  height: 62px;
  padding: 15px 8px;
  margin-right: 23px;
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #000008;
  border: none;
  margin-top: 14px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`;

function CategoryList(props) {
  const { categoryQuery, onSelect } = props;

  return (
    <>
      <LatestTitle>Explore</LatestTitle>
      <ButtonExplore onClick={() => onSelect('')}>
        {categoryQuery === '' ? <u>All</u> : 'All'}
      </ButtonExplore>
      {DEFAULT_CATEGORIES.map((item, i) => (
        <ButtonExplore onClick={() => onSelect(item)} key={i}>
          {categoryQuery === item ? <u>{item}</u> : item}
        </ButtonExplore>
      ))}
    </>
  );
}

export default CategoryList;
import React from 'react';
import styled from 'styled-components';

import { DEFAULT_CATEGORIES } from '../../config/constants';

const LatestTitle = styled.h5`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #000;
`;
const TabContent = styled.div`
  height: 66px;
  background: #e6f6fd;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
`;
const UnOrderList = styled.ul`
  padding: 0;
  margin: 0;
  display: block;
  text-align: center;
  line-height: 69px;
`;
const ListItemTab = styled.li`
  padding: 0 13px;
  font-family: 'PragatiNarrow-Regular';
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 24px;
  color: #000;
  display: inline-block;
  line-height: 41px;
  margin: 0;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
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
      {/* <LatestTitle>Explore</LatestTitle>
      <ButtonExplore onClick={() => onSelect('')}>
        {categoryQuery === '' ? <u>All</u> : 'All'}
      </ButtonExplore>
      {DEFAULT_CATEGORIES.map((item, i) => (
        <ButtonExplore onClick={() => onSelect(item)} key={i}>
          {categoryQuery === item ? <u>{item}</u> : item}
        </ButtonExplore>
      ))} */}
      {/* <LatestTitle>Explore</LatestTitle> */}
      {/* <ButtonExplore onClick={() => onSelect('')}>
        {categoryQuery === '' ? <u>All</u> : 'All'}
      </ButtonExplore> */}
      <TabContent>
        <UnOrderList>
          {DEFAULT_CATEGORIES.map((item, i) => (
            <ListItemTab onClick={() => onSelect(item)} key={i}>
              {categoryQuery === item ? <u>{item}</u> : item}
            </ListItemTab>
          ))}
        </UnOrderList>
      </TabContent>
    </>
  );
}

export default CategoryList;

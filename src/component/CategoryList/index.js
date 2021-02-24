import React from 'react';
import styled from 'styled-components';

import { DEFAULT_CATEGORIES } from '../../config/constants';

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

function CategoryList(props) {
  const { categoryQuery, onSelect } = props;

  return (
    <TabContent>
      <UnOrderList>
        <ListItemTab onClick={() => onSelect('')}>
          {categoryQuery === '' ? <u>All</u> : 'All'}
        </ListItemTab>
        {DEFAULT_CATEGORIES.map((item, i) => (
          <ListItemTab onClick={() => onSelect(item)} key={i}>
            {categoryQuery === item ? <u>{item}</u> : item}
          </ListItemTab>
        ))}
      </UnOrderList>
    </TabContent>
  );
}

export default CategoryList;

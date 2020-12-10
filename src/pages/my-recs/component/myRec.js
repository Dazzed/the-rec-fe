import React from 'react';
import styled from 'styled-components';

const MyRecProductSectionStyle = styled.div`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000;
  margin: 0;
  padding-bottom: 27px;
  border: 1px solid #f1f3f4;
  // margin-bottom: 17px;
  height: 100%;
  .productsimgs {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 24px;
  }
  p,
  h5,
  h6 {
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

function MyRec(props) {
  const { rec } = props;

  return (
    <MyRecProductSectionStyle>
      <a href={rec.externalLink} target="_blank">
        <img
          src={rec.images[0]}
          alt="Products Image"
          className="productsimgs"
        />
        <p>{rec.title}</p>
        <h5>
          <b>{rec.brand.name}</b>
        </h5>
        <h6>
          <b>${rec.price.toFixed(2)}</b>
        </h6>
      </a>
    </MyRecProductSectionStyle>
  );
}

export default MyRec;

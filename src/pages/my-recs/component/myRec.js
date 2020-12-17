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
  position: relative;
  height: 100%;
  .productsimgs {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 24px;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    width: 100%;
    display: none;
    transition: 0.5s ease;
    background: #f5bf42;
    mix-blend-mode: normal;
    border: 1px solid #f1f3f4;

    .icon-close {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      font-size: 18px;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      cursor: pointer;
      &img:hover {
        cursor: pointer;
      }
    }
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
    padding: 0 15px;
  }
  &:hover .overlay {
    display: block;
    background-color: rgba(245, 191, 66, 0.72);
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
      </a>
      <div className="overlay">
        <div className="icon-close" onClick={() => props.deleteMyRec(rec.id)}>
          <img src="../../../imgs/svgs/close-icon-red.svg" />
        </div>
      </div>
      <a href={rec.externalLink} target="_blank">
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

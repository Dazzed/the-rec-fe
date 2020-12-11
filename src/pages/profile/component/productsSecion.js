import React from 'react';
import styled from 'styled-components';

const DealerProductSectionStyle = styled.div`
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
  margin-bottom: 17px;
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
  }
`;

function DealerProductSection(props) {
  const { product } = props;

  return (
    <DealerProductSectionStyle>
      <a href={product.externalLink} target="_blank">
        <img
          src={product.images[0]}
          alt="Products Image"
          className="productsimgs"
        />
        <p>{product.title}</p>
        <h5>
          <b>{product.brand.name}</b>
        </h5>
        <h6>
          <b>${product.price.toFixed(2)}</b>
        </h6>
      </a>
    </DealerProductSectionStyle>
  );
}

export default DealerProductSection;

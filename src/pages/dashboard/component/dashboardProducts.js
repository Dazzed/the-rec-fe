import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ProductSection = styled.div`
  text-align: center;
  background: #ffffff;
  border: 1px solid #f1f3f4;
  box-sizing: border-box;
  // margin-bottom: 26px;
  min-height: 280px;
  height: 100%;
  .productsimgs {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
  .followerimgs {
    width: 52px;
    height: 52px;
    border-radius: $border50;
    margin-top: -25px;
    margin-bottom: 9px;
  }
  h3 {
    font-family: Roboto-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000;
    margin-bottom: 3px;
  }
  h5 {
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000;
    margin-bottom: 17px;
  }
`;

function DashboardProducts(props) {
  const { suggestion } = props;
  const { product, user } = suggestion;

  return (
    <ProductSection>
      <a href={product.externalLink} target="_blank">
        <img
          src={product.images[0]}
          alt="Products Image"
          className="productsimgs"
        />
      </a>
      <Link href={`/profile/${user.id}`}>
        <a>
          <img
            src={user.profilePicUrl}
            alt="Follwer Image"
            className="followerimgs"
          />
          <h3>{user.name}</h3>
        </a>
      </Link>
      <a href={product.externalLink} target="_blank">
        <h5>
          {product.title}
          <br />
          <b>
            {product.brand.name}
            <br />${product.price.toFixed(2)}
          </b>
        </h5>
      </a>
    </ProductSection>
  );
}
export default DashboardProducts;

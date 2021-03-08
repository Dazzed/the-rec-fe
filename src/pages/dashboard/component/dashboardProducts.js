import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ImageComponent from 'component/ImageComponent';

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
    border-radius: 50%;
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
    margin: 0;
    padding: 0 15px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  h6 {
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000;
    margin: 0;
  }
  h4 {
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000;
    margin-bottom: 17px;
  }
  .logoWatermark {
    position: absolute;
    top: 3px;
    height: 50px;
    opacity: 0;
    right: 20px;
    transition: 0.5s ease;
    cursor: pointer;
  }
  &:hover .logoWatermark {
    opacity: 1;
  }
`;

function DashboardProducts(props) {
  const { suggestion } = props;
  const { product, user } = suggestion;

  return (
    <ProductSection>
      <a href={product.externalLink} target="_blank">
        <ImageComponent
          src={product.images[0]}
          fallbackSrc="/imgs/default_image.png"
          alt="Products Image"
          className="productsimgs"
        />
      </a>
      <Link href={`/profile/${user.id}`}>
        <a>
          <ImageComponent
            src={user.profilePicUrl}
            fallbackSrc="/imgs/default_profile_pic.jpg"
            alt="Follwer Image"
            className="followerimgs"
          />
          <h3>{user.name}</h3>
        </a>
      </Link>
      <a href={product.externalLink} target="_blank">
        <h5>{product.title}</h5>
        <h6>{product.brand.name}</h6>
        {product.price && <h4>${product.price.toFixed(2)}</h4>}
      </a>
      <ImageComponent
        src="/imgs/svgs/rec-logo-red.png"
        alt="Logo"
        className="logoWatermark"
        onClick={props.addToMyRec}
      />
    </ProductSection>
  );
}

export default DashboardProducts;

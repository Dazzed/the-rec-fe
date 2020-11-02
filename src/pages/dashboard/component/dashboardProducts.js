import React from "react";
import styled from 'styled-components';

const ProductSection = styled.div`
text-align: center;
  background: #ffffff;
  border: 1px solid #f1f3f4;
  box-sizing: border-box;
  margin-bottom: 26px;
  min-height: 280px;
  .productsimgs {
    width: 100%;
    height: 200px;
    object-fit: cover;
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

function DashboardProducts() {
    return (
        <ProductSection>
            <img src="/imgs/products_img.png" alt="Products Image" className="productsimgs" />
            <img src="/imgs/follower_img.png" alt="Follwer Image" className="followerimgs" />
            <h3>Elsa M.</h3>
            <h5>Mobile Juicer
                <br />
                <b>Vitamer
                <br />
                $26.49
                </b>
            </h5>
        </ProductSection>
    );
}
export default DashboardProducts;

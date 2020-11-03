import React from "react";
import styled from "styled-components";

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
    margin-bottom: 17px;
    .productsimgs {
        width: 100%;
        height: 200px;
        object-fit: cover;
        margin-bottom: 24px;
    }
    p, h5, h6 {
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

function DealerProductsMyRecs() {
    return (
        <MyRecProductSectionStyle>
            <img
                src="/imgs/products_imgrecs.png"
                alt="Products Image"
                className="productsimgs"
            />
            <p>Mobile Juicer</p>
            <h5>
                <b>Vitamer</b>
            </h5>
            <h6>
                <b>$26.49</b>
            </h6>
        </MyRecProductSectionStyle>
    );
}

export default DealerProductsMyRecs;
import { styled } from "styled-components";

export const ReceiptUI = styled.div`
        /* background-color: var(--marronzote); */
        padding: 20px;
        /* border-bottom-right-radius: 15px; */
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        gap: 20px;
        /* animation: show-left 0.5s ease-out; */
        color: black;
        & a {
                color: #909090;
                font-size: 12px;
        }
        /* @media screen and (min-width: 768px) {
                width: 400px;
        } */
`;

export const ReceiptCardsContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        gap: 10px;
        align-items: center;
        /* text-align: left; */
        /* margin-top: 20px; */
        /* max-height: 160px; */
        /* overflow-y: scroll; */
        &::-webkit-scrollbar {
                width: 10px;
                background-color: #252525;
                border-radius: 5px;
        }
        &::-webkit-scrollbar-button {
                display: none;
        }
        &::-webkit-scrollbar-thumb {
                background-color: #606060;
                border-radius: 5px;
        }
        @media screen and (max-width: 768px) {       
                & p {
                        /* color: #909090; */
                        font-size: 12px;
                        /* width: 110px; */
                }
        }
`;

export const ReceiptSection = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        & div {
                width: 90%;
        }
`;

export const ReceiptCosts = styled.div`
        & div {
                width: 100%;
                margin: 10px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
        }
        & p {
                font-size: 15px;
        }
        @media screen and (min-width: 768px) {       
                & p {
                        font-size: 25px;
                        font-weight: 800;
                }
        }
`;

export const ReceiptConfirm = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        & div {
                width: 100%;
                margin: 10px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
        }
        & p {
                font-size: 25px;
        }
        & a:hover {
                text-decoration: underline;
        }
        @media screen and (min-width: 768px) {       
                & p {
                        font-size: 50px;
                        font-weight: 800;
                }
        }
`;

export const ReceiptSpan = styled.span`
        height: 1px;
        width: 400px;
        background: black;
        @media screen and (max-width: 768px) {
                width: 280px;
        }
`;

export const ReceiptTotalText = styled.p`
        font-size: 30px;
        letter-spacing: 2px;
        font-weight: bold;
        color: black;
        /* @media screen and (min-width: 768px) {       
                font-size: 50px;
                font-weight: 800;
        } */
`;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////       CARD      ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ReceiptCardUI = styled.div`
        background-color: black;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 120px;
        /* background: #353535; */
        border-radius: 15px;
        padding: 15px;
        gap: 10px;
        & img {
                max-width: 100px;
                height: 80px;
                object-fit: cover;
                /* padding-left: 15px; */
        }
        @media screen and (max-width: 768px) {
                width: 280px;
                height: 100px;
                & img {
                        max-width: 80px;
                        height: 50px;
                }
        }
`;

export const ReceiptCardData = styled.div`
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: baseline;
        width: 100%;
`;

export const ReceiptCardName = styled.p`
        font-size: 25px;
        text-overflow: ellipsis;
        line-height: 25px;
        color: white;
`; 

export const ReceiptCardPrice = styled.p`
        font-size: 20px;
        font-weight: bold;   
        color: white;
`;

export const ReceiptCardSpan = styled.span`
        /* width: 20px; */
        /* height: 25px; */
        color: #FFFFFF;
        /* text-align: center; */
        font-size: 15px;
        line-height: 22px;
`;

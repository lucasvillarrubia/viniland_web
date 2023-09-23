import { styled } from "styled-components";

export const OrderUI = styled.div`
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

export const OrderCardsContainer = styled.div`
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





/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////       CARD       //////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const OrderCardUI = styled.div`
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        width: 400px;
        height: 120px;
        /* background: #353535; */
        border-radius: 15px;
        padding: 15px;
        gap: 10px;
        cursor: pointer;
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

export const OrderCardNumber = styled.p`
        font-size: 25px;
        text-overflow: ellipsis;
        line-height: 25px;
        color: white;
`; 

export const OrderCardDate = styled.p`
        font-size: 20px;
        font-weight: bold;   
        color: white;
`;

export const OrderCardTotal = styled.span`
        /* width: 20px; */
        /* height: 25px; */
        color: #FFFFFF;
        /* text-align: center; */
        font-size: 15px;
        line-height: 22px;
`;

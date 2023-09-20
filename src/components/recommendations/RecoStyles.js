
import styled from "styled-components";


export const RecoCardsContainer = styled.div`
        /* background-color: var(--rosa); */
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, 400px);
        gap: 20px;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
        @media screen and (max-width: 768px) {
                grid-template-columns: repeat(auto-fit, 280px);
        }
`;

export const RecoCardUI = styled.div`
        width: 400px;
        height: 150px;
        /* min-height: 500px; */
        /* background-color: var(--marroncito); */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* background-color: white; */
        /* gap: 10px; */
        @media screen and (max-width: 768px) {
                width: 280px;
                height: 100px;
        }
`;

export const RecoInfo = styled.div`
        background-color: black;
        height: 100%;
        width: 75%;
        /* width: 100%; */
        /* border-radius: 10px; */
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
        /* min-height: 375px; */
        /* padding: 10px 20px 0; */
        & img {
                /* max-width: 90%; */
                padding: 20px;
                max-width: 150px;
                max-height: 150px;
                @media screen and (max-width: 768px) {
                        max-height: 100px;
                        padding: 10px;
                }
        }
        @media screen and (max-width: 768px) {
                width: 200px;
        }
`;


export const RecoTitle = styled.h3`
        font-size: 20px;
        width: 100%;
        text-align: left;
        padding-left: 25px;
        padding-right: 25px;
        line-height: 20px;
        @media screen and (max-width: 768px) {
                font-size: 15px;
                padding-left: 15px;
                padding-right: 0;
                line-height: 12px;
        }
`;

export const RecoAuthor = styled.h4`
        font-size: 10px;
        width: 100%;
        text-align: left;
        padding-left: 25px;
        padding-right: 25px;
        letter-spacing: 2px;
        @media screen and (max-width: 768px) {
                padding-left: 15px;
                padding-right: 0;
        }
`;

export const RecoPrice = styled.h4`
        font-size: 25px;
        color: var(--amarillo);
        /* background-color: white; */
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding-left: 25px;
        letter-spacing: 2px;
        /* width: 100%; */
        @media screen and (max-width: 768px) {
                padding-right: 0;
                padding-left: 15px;
                font-size: 15px;
        }
`;

export const RecoButton = styled.button`
        width: 25%;
        height: 100%;
        background-color: black;
        color: white;
        border: none;
        cursor: pointer;
        /* border-radius: 50px; */
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        font-size: 40px;
        &:hover {
                background-color: white;
                color: black;
                /* border: 3px solid black; */
                font-weight: bold;
                /* border-radius: 10px; */
                font-size: 50px;
                letter-spacing: 2px;
                transition: all ease-out 0.2s;
                /* width: 100%; */
                @media screen and (max-width: 768px) {
                        font-size: 25px;
                }
        }
        @media screen and (max-width: 768px) {
                width: 20%;
                font-size: 20px;
        }
`;
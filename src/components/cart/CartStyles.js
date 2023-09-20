import styled from "styled-components"

export const CartBG = styled.div`
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        z-index: 2;
        /* display: none; */
`;

export const CartUI = styled.div`
        position: fixed;
        z-index: 3;
        left: 0;
        width: 320px;
        min-height: 350px;
        background-color: var(--marronzote);
        padding: 20px;
        border-bottom-right-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        gap: 20px;
        animation: show-left 0.5s ease-out;
        color: white;
        & a {
                color: #909090;
                font-size: 12px;
        }
        @media screen and (min-width: 768px) {
                width: 400px;
        }
`;

export const CartCardsContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        gap: 10px;
        align-items: center;
        margin-top: 20px;
        max-height: 160px;
        overflow-y: scroll;
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
        & p {
                color: #909090;
                font-size: 12px;
                width: 110px;
        }
`;

export const CartSection = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        & div {
                width: 90%;
        }
        & h3 {
                text-align: center;
                width: 180px;
                font-size: 16px;
                line-height: 20px;
                color: #909090;
                font-family: "Kanit";
                margin: auto;
                padding: 10px 0;
        }
`;

export const CartCosts = styled.div`
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
`;

export const CartConfirm = styled.div`
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
`;

export const CartSpan = styled.span`
        height: 1px;
        width: 325px;
        background: #606060;
`;

export const CartPurchaseButton = styled.button`
        font-size: 30px;
        font-weight: bold;
        position: relative;
        /* background: linear-gradient(98.81deg, var(--tomato) -0.82%, var(--marronzote) 101.53%); */
        background: ${({ disabled }) => disabled ? 'black' : 'linear-gradient(98.81deg, var(--tomato) -0.82%, var(--marronzote) 101.53%)'};
        color: ${({ disabled }) => disabled ? 'gray' : 'white'};
        box-shadow: 11px 28px 50px rgba(20, 78, 90, 0.2);
        border-radius: 15px;
        width: 180px;
        cursor: pointer;
        height: 50px;
        /* color: white; */
        font-family: 'Kanit', sans-serif;
        border: none;
`;

export const TotalText = styled.p`
        font-size: 30px;
        letter-spacing: 2px;
        font-weight: bold;
        color: var(--tomato);
`;

export const CartExit = styled.button`
        height: 25px;
        width: 25px;
        font-size: 10px;
        border-radius: 5px;
        font-weight: bold;
        position: relative;
        background: linear-gradient(98.81deg, var(--tomato) -0.82%, var(--marronzote) 101.53%);
        box-shadow: 11px 28px 50px rgba(20, 78, 90, 0.2);
        cursor: pointer;
        color: white;
        font-family: 'Kanit', sans-serif;
        border: none;
`;

export const CartCardUI = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 270px;
        height: 100px;
        background: #353535;
        border-radius: 15px;
        padding: 15px;
        gap: 10px;
        & img {
                max-width: 80px;
                height: 50px;
                object-fit: cover;
                /* padding-left: 15px; */
        }
`;

export const CartCardControls = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
`;

export const CartCardData = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
`;

export const CartCardName = styled.p`
        font-size: 20px;
        text-overflow: ellipsis;
        line-height: 15px;
`; 

export const CartCardPrice = styled.p`
        font-size: 20px;
        font-weight: bold;   
        color: white;
`;

export const CartCardButton = styled.button`
        /* margin-right: 15px; */
        width: 25px;
        height: 25px;
        font-size: 20px;
        border-radius: 5px;
        background: linear-gradient(98.81deg, var(--tomato) -0.82%, var(--marronzote) 101.53%);
        box-shadow: 11px 28px 50px rgba(20, 78, 90, 0.2);
        font-family: 'Kanit', sans-serif;
        line-height: 15px;
        letter-spacing: 0.5px;
        color: #FFFFFF;
        cursor: pointer;
        border: none;
    
        &:hover {
                animation-name: change-gradient;
                animation-duration: 0.09s;
                animation-fill-mode: forwards;
                animation-timing-function: ease-out;
        }
`;

export const CartCardSpan = styled.span`
        width: 20px;
        height: 25px;
        color: #FFFFFF;
        text-align: center;
        font-size: 20px;
        font-size: 'Kanit';
        line-height: 22px;
`;

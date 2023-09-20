import { styled } from "styled-components";

export const MyOrdersUI = styled.div`
        background-color: var(--marroncito);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        padding-top: 150px;
        gap: 50px;
        @media screen and (max-width: 768px) {
                padding-top: 100px;
                /* font-size: 20px; */
        }
`;

export const MyOrdersTitle = styled.h2`
        font-size: 20px;
        letter-spacing: 1px;
        color: black;
        /* text-shadow: var(--borde_fino); */
        font-family: 'Raleway', sans-serif;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
        max-width: 100%;
        @media screen and (min-width: 768px) {
                font-size: 30px;
                /* margin-bottom: 50px; */
        }
`;

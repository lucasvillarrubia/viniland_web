import { styled } from "styled-components";

export const SignupFormUI = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        margin-bottom: 50px;
        width: 100%;
        & div {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 10px;
                width: 100%;
        }
        & label {
                font-size: 30px;
                color: black;
                /* text-shadow: var(--borde_texto); */
                text-align: center;
                width: 100%;
        }
        & input {
                background-color: white;
                border: none;
                outline: none;
                padding: 1rem;
                border-radius: 15px;
                font-size: 20px;
                width: 100%;
        }
        @media screen and (min-width: 768px) {
                gap: 50px;
                margin-bottom: 50px;
                & div {
                        gap: 20px;
                }
                & label {
                        width: 500px;
                }
                & input {
                        width: 500px;
                }
        }
`;

export const SignupSubmit = styled.button`
        cursor: pointer;
        border: 2px solid black;
        padding: 1rem 3rem;
        border-radius: 30px;
        font-size: 15px;
        font-family: 'Shrikhand', sans-serif;
        text-transform: uppercase;
        text-align: center;
        background: var(--vanilla);
        color: black;
        @media screen and (min-width: 768px) {
                font-size: 30px;
        }
`;

export const SignupCheckbox = styled.input`
        height: 20px;
`;

export const SignupNewsletter = styled.span`
        font-size: 15px;
        text-shadow: none;
        font-style: italic;
`;





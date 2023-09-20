import { styled } from "styled-components";

export const ShippingInfoUI = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 20px;
        font-size: 20px;
        font-weight: 800;
        & a {
                color: var(--marronzote);
                font-size: 15px;
                font-weight: 600;
        }
        & a:hover {
                text-decoration: underline;
        }
`;
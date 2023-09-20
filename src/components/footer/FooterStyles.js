import styled from "styled-components";

export const FooterUI = styled.footer`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 80px;
        padding: 5rem 1rem;
        background-color: var(--marroncito);
        max-width: 1440px;
        margin: 0 auto;
        @media screen and (min-width: 768px) {
                padding: 8rem 0 2rem 0;
        }
`;

export const InfoFooter = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
        @media screen and (min-width: 768px) {
                flex-direction: row;
                gap: 20vw;
                flex-wrap: wrap;
        }
`;

export const LinksFooter = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
`;

export const LogosFooter = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        & img {
                height: 150px;
        }
        & p {
                font-family: 'Shrikhand', sans-serif;
                font-size: 80px;
                color: black;
                /* text-shadow: var(--borde_claro); */
        }
`;

export const RedesFooter = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        & a {
                font-size: 40px;
                color: black;
                text-shadow: var(--borde_fino);
        }
`;

export const DireccionFooter = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        font-size: 20px;
        overflow-wrap: break-word;
        color: black;
        gap: 20px;
        padding-top: 2rem;
        @media screen and (min-width: 768px) {
                text-align: left;
                align-items: baseline;
        }
`;

export const ExtrasFooter = styled.div`
        text-align: center;
        & a {
                text-decoration: underline;
                font-size: 15px;
                color: black;
                text-align: center;
        }
        & p {
                color: black;
                font-size: 20px;
                text-align: center;
        }
`;
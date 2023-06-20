import styled from "styled-components";
import { devices } from "./Commons";

export const BannerCard = styled.div`
    height: 100%;
    flex-direction: row;
    background: linear-gradient(96.68deg, #DEEEF7 2.88%, rgba(222, 238, 247, 0) 124.33%);
    padding-top: 10rem;
    align-items: center;

    & > *:not(:first-child) {
        margin-top: 10rem;
    }
`;

export const TextWrapper = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    padding: 0 7em 5em;
    > img {
        display: none;
        height: 50%;
        margin: 0 auto;
        margin-bottom: 2em;
        @media ${devices.tablet} {
            display: block;
        }
    }
    @media ${devices.tablet} {
        width: 100%;
        padding: 0 2em;
    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding-bottom: 5em;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 55%;
    height: 100%;
    img {
        height: auto;
    }
    @media ${devices.tablet} {
        display: none;
    }
`;

export const Title = styled.p`
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 3.75em;
    line-height: 1.5;
    text-transform: capitalize;
    color: #010F52;
    margin-bottom: 6rem;

    @media ${devices.laptop} {
        font-size: 3em;
        line-height: 1.25em;
        margin-bottom: 4rem;
    }

    @media ${devices.tablet} {
        font-size: 2.75em;
        line-height: 1.25em;
        margin-bottom: 2rem;
    }

    @media ${devices.mobileL} {
        font-size: 1.75em;
        line-height: 1.25em;
        margin-bottom: 2rem;
    }
`;



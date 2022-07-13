import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    max-width: 270px;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 4px 4px 12px -4px var(--dark-grey);

    & > a {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    & .hide ~ button {
        margin-top: auto;
    }
`;

export const Image = styled.div`
    text-align: center;
    font-size: 0;
    position: relative;

    & img {
        max-width: 100%;
        max-height: 170px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    .date {
        width: 100%;
        padding: 0.3rem 0;
        background-color: var(--green);
        position: absolute;
        bottom: 0;
        opacity: 0.9;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        font-family: var(--content-font-bold);
        color: var(--white);
    }
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    font-size: 0.8rem;
    color: var(--grey);

    img {
        height: 20px;
        margin-right: 0.1rem;
    }
`;

export const Price = styled.div`
    margin-top: auto;
    margin-bottom: 1rem;

    .price {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--green);
    }

    .price.old {
        margin-bottom: 0.3rem;
        font-size: 0.8rem;
        text-decoration: line-through;
        color: var(--grey);
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 0.2rem;
    margin-top: 0.2rem;
    font-size: 0.8rem;

    .tag {
        padding: 0.2rem 0.4rem;
        border-radius 4px;
        display: inline-block;
        color: #FFFFFF;
        opacity: 0.8;
        vertical-align: middle;
    }

    .comingSoon {
        background-color: #FFCC00;
    }
    .lastUnits {
        background-color: #FF9900;
    }
    .new {
        background-color: #0066FF;
    }
    .offer {
        background-color: #CC00CC;
    }
    .soldOut {
        background-color: #CC0000;
    }
`;

export const Title = styled.h3`
    margin: 0.5rem 0 0.2rem;
    font-size: 1.8rem;
    text-align: center;
    color: var(--pink);
`;
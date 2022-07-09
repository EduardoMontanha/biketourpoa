import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    max-width: 270px;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #DDDDDD;
    background-color: #FFFFFF;
`;

export const Image = styled.div`
    text-align: center;

    & img {
        max-width: 100%;
        max-height: 100%;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 0.8rem;
    color: #BBBBBB;

    img {
        height: 20px;
        margin-right: 0.1rem;
    }
`;

export const Price = styled.div`
    margin-bottom: 1rem;

    .price {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--green);
    }

    .price.old {
        font-size: 0.8rem;
        text-decoration: line-through;
        color: var(--pink);
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.8rem;

    &.no-tag {
        margin-bottom: 25.5px;
    }

    .tag {
        padding: 0.2rem 0.4rem;
        border-radius 4px;
        margin: 0.1rem;
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
    margin: 0.2rem 0 0.4rem;
    font-size: 2rem;
    color: var(--pink);
`;
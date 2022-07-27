import styled from 'styled-components';

export const BurgerButton = styled.button`

    @media all and (min-width: 1024px) {
        display: none;
    }
`;

export const HeaderArea = styled.header`
    width: 100%;
    height: 5rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: var(--yellow);
    box-shadow: 0 -8px 16px 4px #000000;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    img {
        height: 3rem;
    }
`;

export const Navigation = styled.nav`
    display: none;

    ul {
        display: flex;
    }

    li a {
        color: var(--pink);
        font-family: var(--content-font-bold);
        font-size: 1.4rem;
    }

    li + li {
        margin-left: 1rem;
    }

    @media all and (min-width: 1024px) {
        display: inline-block;
    }
`;
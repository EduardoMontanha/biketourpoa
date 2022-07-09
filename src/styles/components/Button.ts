import styled from 'styled-components';
import { cssVar, lighten } from 'polished';

interface ButtonProps {
    full?: boolean,
    primary?: boolean
}

export const ButtonStyle = styled.button<ButtonProps>`
    width: ${props => props.full ? "100%" : "auto"};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.primary ? "var(--pink)" : "var(--green)"};
    color: #FFFFFF;
    font-weight: bold;
    font-family: var(--content-font);
    cursor: pointer;

    &:hover {
        background-color: ${props => props.primary ? lighten(0.05, `${cssVar("--pink", "#FFFFFF")}`) : lighten(0.05, `${cssVar("--green", "#FFFFFF")}`)};
    }
`;
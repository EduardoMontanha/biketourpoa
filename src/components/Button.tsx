import styled from 'styled-components';
import { cssVar, lighten } from 'polished';

interface ButtonProps {
    full?: boolean,
    primary?: boolean
}

interface ComponentProps {
    full?: boolean,
    label: string,
    primary?: boolean
}

const ButtonStyle = styled.button<ButtonProps>`
    width: ${props => props.full ? "100%" : "auto"};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.primary ? "var(--pink)" : "var(--green)"};
    color: #FFFFFF;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.primary ? lighten(0.05, `${cssVar("--pink", "#FFFFFF")}`) : lighten(0.05, `${cssVar("--green", "#FFFFFF")}`)};
    }
`;

const Button = ({ full, label, primary }: ComponentProps) => {
    const fullWidth = !!full ? full : false;
    const primaryBtn = !!primary ? primary : false;

    return (
        <ButtonStyle full={fullWidth} primary={primaryBtn}>{label}</ButtonStyle>
    );
}

export default Button;
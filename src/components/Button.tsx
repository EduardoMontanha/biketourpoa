import styled from 'styled-components';

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
    background-color: ${props => props.primary ? "red" : "blue"};
    color: #FFFFFF;
    font-weight: bold;
    cursor: pointer;
`;

const Button = ({ full, label, primary }: ComponentProps) => {
    const fullWidth = !!full ? full : false;
    const primaryBtn = !!primary ? primary : false;

    return (
        <ButtonStyle full={fullWidth} primary={primaryBtn}>{label}</ButtonStyle>
    );
}

export default Button;
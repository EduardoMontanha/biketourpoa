import { ButtonStyle } from "../styles/components/Button";

interface ComponentProps {
    full?: boolean,
    label: string,
    primary?: boolean
}

const Button = ({ full, label, primary }: ComponentProps) => {
    const fullWidth = !!full ? full : false;
    const primaryBtn = !!primary ? primary : false;

    return (
        <ButtonStyle full={fullWidth} primary={primaryBtn}>{label}</ButtonStyle>
    );
}

export default Button;
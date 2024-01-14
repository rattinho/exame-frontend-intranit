import { ButtonContainer, Vetor } from "./style"

import img from '../../assets/Vetores/Lozango.svg'

interface IButton{
    title: string;
    variant?: string;
    onClick?: ()=> void;
    type?: string;
    active?: boolean;
}

const Button = ({ title, variant = "primary", onClick, active = true }: IButton) => {
    return (
        <ButtonContainer variant={variant} 
        onClick={onClick} active={active}>
            {title}
        {variant === "primary" && 
            <Vetor src={img} />
        }
        </ButtonContainer>
    )
}

export { Button }
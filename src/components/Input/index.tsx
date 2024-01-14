import { ErrorText, InputContainer, InputText, Vetor, InputMaskStyled } from './style'

import { Controller } from 'react-hook-form';



import img from '../../assets/Vetores/Lozango.svg'

interface IInput {
    name: string;
    control: any;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
    text: string;
}



export const Input = ({ name, control, errorMessage, text, ...rest }: IInput) => {
    return (
        <>
            {errorMessage ? (<ErrorText>{errorMessage}</ErrorText>) : null}
            <InputContainer>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => {
                        return (
                            name === "telefone" ? (<InputMaskStyled
                                mask="(99) 99999-9999"
                                maskChar=""
                                value={value}
                                onChange={onChange}
                                required={true}
                            />) : (<InputText value={value} onChange={onChange} required={true}  {...rest} />)
                        )
                    }}
                />
                <span>{text}</span>
                <Vetor src={img} />
            </InputContainer>
        </>
    );
}

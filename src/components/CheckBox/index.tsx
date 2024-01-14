import { Controller } from "react-hook-form";

import { ContainerCheckBox, ErrorText, InputCheck } from "./style";

interface ICheckBox {
    name: string;
    control: any;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
    text: string;
}


export const CheckBox = ({control, name, errorMessage, text}:ICheckBox) => {

    return(
        <Controller 
        name={name}
        control={control}
        render={({ field }) => (
            <ContainerCheckBox>
                <ErrorText>{errorMessage}</ErrorText>
                <InputCheck type='checkbox' checked={field.value} onChange={field.onChange} />
                <span>{text}</span>
            </ContainerCheckBox>
        )}
    />
    )
}
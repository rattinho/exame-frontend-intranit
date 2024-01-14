import { Form, LogoIntranit, Wrapper, FormEnd } from './style'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

import IntranitIco from '../../assets/logo/Intranit.png'
import { Input } from '../../components/Input';
import { CheckBox } from '../../components/CheckBox';
import { Button } from '../../components/Button';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const schema = yup.object({
    name: yup.string().required('Campo Obrigatório'),
    telefone: yup.string().matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'O número de telefone deve estar no formato (XX) XXXXX-XXXX').required('Campo Obrigatório'),
    email: yup.string().email('E-mail não é valido').required('Campo Obrigatório'),
    termos: yup.boolean().oneOf([true], 'Você deve aceitar os termos e contratos')
}).required();

interface IContato {
    inViewFunction: Function,
    Id: string
}

export const SectionContact = ({inViewFunction, Id}: IContato) => {

    const [refinView, inView] = useInView();

    useEffect(()=>{
        if(inView){
            inViewFunction(Id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit'
    });

    const submitcontact = () => {
        console.log("Contato Salvo")
    }

    return (
        <Wrapper id={Id} ref={refinView}>
            <LogoIntranit>
                <h4>Desenvolvido por</h4>
                <img src={IntranitIco} alt='IntraNit' />
            </LogoIntranit>
            <Form>
                <h1>Ficou interessado?</h1>
                <p>Preencha o formulário abaixo e um de nossos consultores entrará em contato.</p>
                <form onSubmit={handleSubmit(submitcontact)}>
                    <Input name='name' errorMessage={errors?.name?.message} control={control} text="Como devemos te chamar?" />
                    <Input name='telefone' errorMessage={errors?.telefone?.message} control={control} text="seu Telefone" />
                    <Input name='email' errorMessage={errors?.email?.message} control={control} text="seu melhor E-mail" />
                    <FormEnd>
                        <CheckBox name='termos' errorMessage={errors?.termos?.message} control={control} text='Li e aceito os termos de uso dos dados conforme indicado na Política de Privacidade.' />
                        <Button title='Enviar' variant='terciary' active={true}/>
                    </FormEnd>
                </form>
            </Form>
        </Wrapper>
    )
}
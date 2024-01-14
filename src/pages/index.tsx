import { NavBar } from '../components/NavBar';
import { SectionHome } from './home';
import {
    Container,
    Sections,
    Mandala,
} from './style'

import MandalaImg from '../assets/Vetores/Mandala.svg'
import { SectionEmprendimento } from './emprendimento';
import { SectionPlantas } from './plantas';
import { SectionLocalizacao } from './localizacao';
import { SectionContact } from './contato';
import { TitleDescription } from '../components/TitleDescription';
import { useState } from 'react';

interface IPaginas {
    [key: string]: string;
}

export const Home = () => {

    const paginas: IPaginas = {
        "Home": "This is Home Description",
        "O Emprendimento": "This is O Emprendimento Description",
        "Plantas": "This is Plantas Description",
        "Localização": "This is Localização Description",
        "Contato": "This is Contato Description",
    }

    const [title, setTitle] = useState('titulo')
    const [descricao, setDescricao] = useState('descricao')

    const SwitchTitle = (name: string) =>{
        setTitle(`Company Name - ${name}`)
        setDescricao(paginas[name])
    }

    return (
        <Container>
            <TitleDescription title={title} description={descricao} />
            <NavBar Buttons={Object.keys(paginas)} />
            <Mandala width={50} right={-16} top={2} src={MandalaImg} rotate={180} />
            <Mandala width={40} right={-7} top={49.5} src={MandalaImg} rotate={180} />
            <Mandala width={38} left={19} top={79.5} src={MandalaImg} />
            <Sections>
                <SectionHome Id={Object.keys(paginas)[0]} inViewFunction={SwitchTitle} />
                <SectionEmprendimento Id={Object.keys(paginas)[1]} inViewFunction={SwitchTitle} />
                <SectionPlantas Id={Object.keys(paginas)[2]} inViewFunction={SwitchTitle} />
                <SectionLocalizacao Id={Object.keys(paginas)[3]} inViewFunction={SwitchTitle}/>
                <SectionContact  Id={Object.keys(paginas)[4]} inViewFunction={SwitchTitle}/>
            </Sections>
        </Container>
    )
}

export default Home;
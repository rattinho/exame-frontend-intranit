import {
    Container,
    Logo,
    Content,
    SpanText,
    Link

} from "./style"

import {Bar} from '../Bar'

import logo from '../../assets/logo/logo.svg'

interface INavBar {
    Buttons: string[];
}

export const NavBar = ({Buttons}: INavBar) => {

    return (
        <Container>
            <Logo src={logo}></Logo>
            <Content>
                <Link  href={`#${Buttons[0]}`} variant="bold">HOME</Link>
                <Bar justify="start" sizeb={40} sizel={38} lpos={2}/>
                <Link  href={`#${Buttons[1]}`} variant="normal">O EMPRENDIMENTO</Link>
                <Link  href={`#${Buttons[2]}`} variant="normal">PLANTAS</Link>
                <Link  href={`#${Buttons[3]}`} variant="normal">LOCALIZAÇÃO</Link>
                <Link  href={`#${Buttons[4]}`} variant="normal">CONTATO</Link>
                <SpanText><span>POLITICAS DE PRIVACIDADE</span></SpanText>    
            </Content>
        </Container>
    )
}
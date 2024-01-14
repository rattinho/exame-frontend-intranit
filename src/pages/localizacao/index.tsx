import { Bar } from '../../components/Bar'
import { Container } from '../../styles/global'

import mercadoIco from '../../assets/GeoIcons/mercado.png'
import petshopIco from '../../assets/GeoIcons/petshop.png'
import bicicletarioIco from '../../assets/GeoIcons/bibicletario.png'
import parqueIco from '../../assets/GeoIcons/park.png'
import bancoIco from '../../assets/GeoIcons/Banco.png'
import metroIco from '../../assets/GeoIcons/Metro.png'


import { Button, ButtonImage, ButtonsLayout, List, Map, MapIcons } from './style'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface ILocalizacao {
    inViewFunction: Function,
    Id: string
}

export const SectionLocalizacao = ({inViewFunction, Id}: ILocalizacao) => {

    const [refinView, inView] = useInView();

    useEffect(()=>{
        if(inView){
            inViewFunction(Id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    const [Active, setActive] = useState({
        "mercado": false,
        "petshop": false,
        "bicicletario": false,
        "parque": false,
        "banco": false,
        "metro": false
    })


    const enableEstabelecimento = (key: keyof typeof Active) => {
        const aux = {...Active}
        aux[key] = true;
        setActive(aux)
    }

    const disableEstabelecimento = (key: keyof typeof Active) => {
        const aux = {...Active}
        aux[key] = false;
        setActive(aux)
    }

    return (
        <Container id={Id} ref={refinView}>
            <List>
                <h1>localização</h1>
                <Bar justify='start' sizeb={100} sizel={3} lpos={0}/>
                <p>
                    Rua Itaperuna, 100 Santa Rosa - Pé Pequeno
                    Niterói - RJ, 24240-070
                </p>
                <ButtonsLayout>
                    <Button onMouseEnter={()=> enableEstabelecimento("mercado")} onMouseLeave={() => disableEstabelecimento("mercado")}>
                        <ButtonImage>
                            <img src={mercadoIco} alt='Mercado' />
                        </ButtonImage>
                        <h2>MERCADO</h2>
                    </Button>
                    <Button onMouseEnter={()=> enableEstabelecimento("petshop")} onMouseLeave={() => disableEstabelecimento("petshop")}>
                        <ButtonImage>
                            <img src={petshopIco} alt='Petshop' />
                        </ButtonImage>
                        <h2>PETSHOP</h2>
                    </Button>
                    <Button onMouseEnter={()=> enableEstabelecimento("bicicletario")} onMouseLeave={() => disableEstabelecimento("bicicletario")}>
                        <ButtonImage>
                            <img src={bicicletarioIco} alt='bicicletario' />
                        </ButtonImage>
                        <h2>BICICLETÁRIO</h2>
                    </Button>
                    <Button onMouseEnter={()=> enableEstabelecimento("parque")} onMouseLeave={() => disableEstabelecimento("parque")}>
                        <ButtonImage>
                            <img src={parqueIco} alt='parque' />
                        </ButtonImage>
                        <h2>PARQUE</h2>
                    </Button>
                    <Button onMouseEnter={()=> enableEstabelecimento("banco")} onMouseLeave={() => disableEstabelecimento("banco")}>
                        <ButtonImage>
                            <img src={bancoIco} alt='banco' />
                        </ButtonImage>
                        <h2>BANCO</h2>
                    </Button>
                    <Button onMouseEnter={()=> enableEstabelecimento("metro")} onMouseLeave={() => disableEstabelecimento("metro")}>
                        <ButtonImage>
                            <img src={metroIco} alt='metro' />
                        </ButtonImage>
                        <h2>ESTAÇÃO DE METRÔ</h2>
                    </Button>
                </ButtonsLayout>
            </List>
            <Map>
                <MapIcons posicaox={63} posicaoy={65} size={0.45} active={Active.mercado}>
                    <img src={mercadoIco} alt='Mercado' />
                </MapIcons>
                <MapIcons posicaox={74} posicaoy={63} size={0.45} active={Active.mercado}>
                    <img src={mercadoIco} alt='Mercado' />
                </MapIcons>
                <MapIcons posicaox={70} posicaoy={33} size={0.45} active={Active.petshop}>
                    <img src={petshopIco} alt='petshop' />
                </MapIcons>
            </Map>
        </Container>
    )
}
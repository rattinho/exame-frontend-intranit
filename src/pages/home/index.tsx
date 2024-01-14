import { Carousel } from "./components/Carousel"

import img1 from '../../assets/Home Images/img1.jpeg';
import img2 from '../../assets/Home Images/img2.jpeg';
import img3 from '../../assets/Home Images/img3.jpeg';

import { HomeImg } from "./components/HomeImg";

import {Container} from '../../styles/global'

import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

interface IHome {
    inViewFunction: Function,
    Id: string
}

export const SectionHome = ({inViewFunction, Id}: IHome) => {


    const [refinView, inView] = useInView();

    useEffect(()=>{
        if(inView){
            inViewFunction(Id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    const img = [<HomeImg img={img1} text={<>aposte no <strong>Conforto</strong> sem perder a <strong>elegância</strong></>} />,
    <HomeImg img={img2} text={<><strong>Lazer</strong> à um passo</>} />,
    <HomeImg img={img3} text={<>Crie memórias com <strong>amigos</strong> e <strong>família</strong></>} />
    ];

    return (
        <Container id={Id} ref={refinView}>
            <Carousel items={img} />
        </Container>
    )
}
// import { Container } from "../style"
import { Buttons, FullScreen, ImgPlanta, List, Lupa, Planta } from "./style"

import {Container} from '../../styles/global'

import { Bar } from "../../components/Bar"

import Planta1 from '../../assets/Plantas/3_Quartos.png'
import Planta2 from '../../assets/Plantas/2_Quartos.png'
import Planta3 from '../../assets/Plantas/Cobertura.png'
import LupaIco from '../../assets/Vetores/Lupa.svg'
import { Button } from "../../components/Button"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface IPlantas {
    inViewFunction: Function,
    Id: string
}

export const SectionPlantas = ({inViewFunction, Id}: IPlantas) => {

    const [refinView, inView] = useInView();

    useEffect(()=>{
        if(inView){
            inViewFunction(Id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    const [AtualImg, setAtualImg] = useState(Planta1)

    const [Active, setActive] = useState([
        true, false, false
    ])

    const switchImg = (index: number, img: string) => {
        const aux = [...Active]

        setActive(aux.map((item, itemIndex) => {
            if (itemIndex === index) {
                return !item;
            } else {
                return false;
            }
        }))
        setAtualImg(img)
    }

    const [ActiveFS, setActiveFS] = useState(false);
    const [AnimationFS, setAnimationFS] = useState(false);

    const setFullScreen = (enable: boolean) => {
        if(enable){
            setActiveFS(enable)
            const timeout = setTimeout(()=>setAnimationFS(enable), 100);
            return () => clearTimeout(timeout);
        }else{
            setAnimationFS(enable);
            const timeout = setTimeout(()=>setActiveFS(enable), 200);
            return () => clearTimeout(timeout);
        }
    }

    return (
        <Container id={Id} ref={refinView}>
            <FullScreen active={ActiveFS} animation={AnimationFS}>
                <img src={AtualImg} alt="FullScreen" />
                <span onClick={()=>setFullScreen(false)}>X</span>
            </FullScreen>
            <Planta>
                <ImgPlanta img={AtualImg} />
                <Lupa src={LupaIco} onClick={() => setFullScreen(true)}/>
            </Planta>
            <List>
                <h1>Plantas</h1>
                <Bar justify="start" sizeb={90} sizel={3} lpos={0} />
                <Buttons>
                    <Button title="3 Quartos" variant="secondary" active={Active[0]} onClick={() => switchImg(0, Planta1)} />
                    <Button title="2 Quartos" variant="secondary" active={Active[1]} onClick={() => switchImg(1, Planta2)} />
                    <Button title="Cobertura" variant="secondary" active={Active[2]} onClick={() => switchImg(2, Planta3)} />
                </Buttons>
            </List>
        </Container>
    )
}
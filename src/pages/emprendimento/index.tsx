import {Left, Right, ImagesSelect, Content, Images, StyledImgs, InputSlider } from "./style"
import {Container} from '../../styles/global'

import img1 from '../../assets/Home Images/img1.jpeg';
import img2 from '../../assets/Home Images/img2.jpeg';
import img3 from '../../assets/Home Images/img3.jpeg';
import img4 from '../../assets/Home Images/img4.jpeg';
import { useEffect, useState } from "react";
import { Bar } from "../../components/Bar";
import { useInView } from "react-intersection-observer";

interface IEmprendimento {
    inViewFunction: Function,
    Id: string
}

export const SectionEmprendimento = ({inViewFunction, Id}: IEmprendimento) => {

    const [refinView, inView] = useInView();

    useEffect(()=>{
        if(inView){
            inViewFunction(Id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    const [AtualImg, setAtualImg] = useState(img4);

    const [imagesInOff] = useState([
        img1, img2, img3
    ])


    const [Anim, setAnim] = useState([
        false, false, false
    ])

    const switchImage = (img: string, index: number) => {
        const aux = [...Anim]
        aux[index] = true;
        aux[4] = true;
        setAnim(aux);
        const desable = setTimeout(() => {
            imagesInOff[index] = AtualImg;
            setAtualImg(img);
            const aux = [...Anim]
            aux[index] = false;
            aux[4] = false;
            setAnim(aux);
        }, 200);
        return () => clearTimeout(desable)

    }


    const [sliderValue, setSliderValue] = useState(50)

    const handleSliderEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(event.target.value));
    }



    return (
        <Container id={Id} ref={refinView}>
            <Left>
                <Content>
                    <h1>
                        O empreendimento
                    </h1>

                    <Bar justify="start" sizeb={100} sizel={3} lpos={0}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra viverra nisl, id nullam et morbi. Ornare ut est faucibus nec ut curabitur sagittis. Dui risus amet, sit morbi aliquet. In consectetur hendrerit ut lobortis nunc enim fusce morbi sagittis. Bibendum nulla cursus urna habitant integer in orci, amet. Elementum habitasse sem amet sit mi est. Aenean dui, odio malesuada ullamcorper est sed. Aliquet lacus, platea nibh ultricies turpis diam leo duis. Amet massa, sit rhoncus leo laoreet habitant. Aliquam nullam risus duis curabitur.
                    </p>
                    <Bar justify="end" sizeb={20} sizel={3} lpos={1}/>
                </Content>
                <Images>
                    <ImagesSelect>
                        <StyledImgs active={Anim[0]} src={imagesInOff[0]} alt="imagem" onClick={() => switchImage(imagesInOff[0], 0)} />
                        <StyledImgs active={Anim[1]} src={imagesInOff[1]} alt="imagem" onClick={() => switchImage(imagesInOff[1], 1)} />
                        <StyledImgs active={Anim[2]} src={imagesInOff[2]} alt="imagem" onClick={() => switchImage(imagesInOff[2], 2)} />
                    </ImagesSelect>
                    <InputSlider type="range" min={0} max={100} value={sliderValue} onChange={handleSliderEvent} />
                    <span> ( Click e Arraste ) </span>
                </Images>
            </Left>
            <Right active={Anim[4]} position={sliderValue}>
                <img src={AtualImg} alt="imagem" />
            </Right>
        </Container>
    )
}
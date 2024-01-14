import { useEffect, useState } from "react";
import { ICarouselProps } from "./type"

import { Container, Item } from "./style";

export const Carousel = ({ items }: ICarouselProps) => {

    const [Index, setIndex] = useState(0);

    const switchImg = () => {
        if (Index >= 0) {
            if (Index === items.length - 1) {
                setIndex(0);
            } else {
                setIndex(Index + 1);
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(switchImg, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[Index])


    return (
        <Container onClick={switchImg}>
            {items.map((item)=>{
                if(item === items[Index]){
                    return(<Item enable={true}>{item}</Item>)
                }else{
                    return(<Item enable={false}>{item}</Item>)
                }
            })}
        </Container>
    );
}

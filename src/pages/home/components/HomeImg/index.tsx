import { Button } from "../../../../components/Button"
import { Container, Content } from "./style"

interface IHomeImg {
    img: string;
    text?: React.ReactNode;
}


export const HomeImg = ({ img, text }: IHomeImg) => {
    return (
        <Container img={img}>
            <Content>
                <h1>{text}</h1>
                <Button variant="primary" onClick={() => {window.location.href = "#O Emprendimento"}} title="MARQUE UMA VISITA" active={false} />
            </Content>
        </Container>
    )
}
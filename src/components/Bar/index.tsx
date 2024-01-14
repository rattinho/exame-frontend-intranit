import { Container, Hr, Vetor } from "./style"

import Lozango from '../../assets/Vetores/Lozango.svg'

interface IBar {
    justify: string,
    sizeb: number,
    sizel: number,
    lpos: number
}

export const Bar = ({ justify, sizeb, sizel, lpos }: IBar) => {

    return (
        <Container justify={justify}>
            {lpos === 0
            ? <><Hr size={sizeb} /> <Vetor src={Lozango} size={sizel} /></> 
            : lpos === 1
            ?<><Vetor src={Lozango} size={sizel} /> <Hr size={sizeb} /></>
            : <Hr size={sizeb} />
            }
        </Container>
    )
}
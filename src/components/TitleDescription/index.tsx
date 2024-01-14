import { useEffect } from "react"

interface ITD {
    title: string;
    description: string
}
export const TitleDescription = ({ title, description }: ITD) => {
    useEffect(() => {
        document.title = title;

        const Descricao = document.querySelector('meta[name="description"]');

        if (Descricao) {
            Descricao.setAttribute("content", description);
        }

    }, [title, description])

    return (<></>
    )
}
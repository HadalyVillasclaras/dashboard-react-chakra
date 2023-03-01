import { Title } from "./Title"

export interface PropsTitle{
    title: string
}

export const Subheader = ({title}: PropsTitle) => {

    return (
        <header style={{ margin: '0 0 1rem'}}>
            <Title title={title} />
        </header>
    ) 
}
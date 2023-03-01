export interface PropsTitle{
    title: string
}

export const Title = ({title}: PropsTitle ) => {
    return (
        <>
            <h2>{title}</h2>
        </>
    )
} 

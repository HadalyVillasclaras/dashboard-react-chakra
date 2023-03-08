import { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
    children: ReactElement | ReactElement[]
}

export const Section = ({ children }: Props) => {
  return (
    <Box as="section" backgroundColor='white' p='2rem' borderRadius='1rem' mb='2rem'>
        {children}
    </Box>
  )
}
import { Box, Text } from '@chakra-ui/react'
type Props = {
  title: string,
  value: any
}

export const DetailsSubsection = ({title, value}: Props) => {
  return (
    <Box as='section'>
      <Text as="h5">{title}</Text>
      <Text>{value}</Text>
    </Box>
  )
}
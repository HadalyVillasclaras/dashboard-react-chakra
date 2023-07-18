import { Text, Box, Flex} from '@chakra-ui/react'
import { DetailsSubsection } from '../../../common/components/sections/DetailsSubsection';

type Props = {
  book: any;
  // book: BookInterface
}

export const BookDetails = ({book}: Props) => {
  return (
    <>
      <Box as="header" display='flex' justifyContent="space-between" alignItems="center" >
        <Text as="h2">T</Text>
      </Box>
      <Flex gap="3rem" flexDirection="column">
        <DetailsSubsection title="Title" value={book?.title}/>
        <DetailsSubsection title="Author" value={book?.author}/>
        <DetailsSubsection title="Year" value={book?.year}/>
        <DetailsSubsection title="Pages" value={book?.pages}/>
      </Flex>
    </>
  )
}
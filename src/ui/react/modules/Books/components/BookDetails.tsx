import { Text, Box, Flex } from '@chakra-ui/react'
import { DetailsSubsection } from '../../../common/components/sections/DetailsSubsection';

type Props = {
  book: any;
  // book: BookInterface
}

export const BookDetails = ({ book }: Props) => {
  return (
    <>
      <Box as="header" display='flex' justifyContent="space-between" alignItems="center" >
        <Text as="h2">T</Text>
      </Box>
      <Flex gap="3rem" flexDirection="column">
        <DetailsSubsection title="Title" value={book?.title} />
        <DetailsSubsection title="Subtitle" value={book?.subtitle} />
        <DetailsSubsection title="Author" value={book?.author} />
        <DetailsSubsection title="Year" value={book?.year} />
        <DetailsSubsection title="Category" value={book?.category} />
        <DetailsSubsection title="Language" value={book?.language} />
        <DetailsSubsection title="Country" value={book?.country} />
        <DetailsSubsection title="Pages" value={book?.pages} />
        <DetailsSubsection title="Price" value={book?.price} />
        <DetailsSubsection title="Link" value={book?.link} />
        <DetailsSubsection title="Status" value={book?.status} />
        <DetailsSubsection title="Isbn" value={book?.isbn} />
        <DetailsSubsection title="Description" value={book?.description} />
        <DetailsSubsection title="Url" value={book?.url} />
      </Flex>
    </>
  )
}
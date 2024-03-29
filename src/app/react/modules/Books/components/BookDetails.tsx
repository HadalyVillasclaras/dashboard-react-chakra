import { Box, Flex, Text } from '@chakra-ui/react';
import { Book } from '../../../../../core/modules//books/domain/Book';
import { getCountryNameByCode } from '../../../../../core/shared/utils/getCountryNameByCode';
import { getLanguageNameByCode } from '../../../../../core/shared/utils/getLanguageNameByCode';
import { DetailsSubsection } from '../../../shared/components/sections/DetailsSubsection';

type Props = {
  book: Book;
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
        <DetailsSubsection title="Language" value={getLanguageNameByCode(book?.language)} />
        <DetailsSubsection title="Country" value={getCountryNameByCode(book?.country)}/>
        <DetailsSubsection title="Pages" value={book?.pages} />
        <DetailsSubsection title="Price" value={book?.price} />
        <DetailsSubsection title="Link" value={book?.link} />
        <DetailsSubsection title="Status" value={book?.status} />
        <DetailsSubsection title="Isbn" value={book?.isbn} />
        <DetailsSubsection title="Description" value={book?.description} />
      </Flex>
    </>
  )
}
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Book } from "../../../../../core/books/Entity/Book";
import { deleteBook } from "../../../../../core/books/services/deleteBook";
import { getCountryNameByCode } from "../../../../../core/utils/getCountryNameByCode";
import { getLanguageNameByCode } from "../../../../../core/utils/getLanguageNameByCode";

interface Props {
  books: Array<Book>
}

export const BooksTable = ({ books }: Props) => {
  const navigate = useNavigate();

  async function deleteCurrentBook(event: MouseEvent, bookId: number) {
    event.stopPropagation()
    if (bookId !== undefined) {
      console.log('delete?');
      const deleteResponse =  await deleteBook(bookId);
    }
  }
  function navigateToBookDetailPage(bookId: number) {
    if (bookId !== undefined) {
      navigate(`/books/detail/${bookId}`);
    }
  }
//categorie multiselect pls
  return (
    <>
      <TableContainer >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Year</Th>
              <Th>Category</Th> 
              <Th>Language</Th>
              <Th>Pages</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {books?.map((book: any, index: any) => {
              return (
                <Tr key={index} onClick={() => navigateToBookDetailPage(book.id)}>
                  <Td>{book.title}</Td>
                  <Td>{book.author}</Td>
                  <Td>{book.year}</Td>
                  <Td>{book.category}</Td>
                  <Td>{getLanguageNameByCode(book?.language)}</Td>
                  <Td>{getCountryNameByCode(book?.country)}</Td>
                  <Td>x</Td>
                  <Td>
                    <ButtonGroup>
                      <Link to={`edit/${book.id}`} onClick={event => event.stopPropagation()}>
                        <Button size="xs" variant="icon-button">
                          <EditIcon />
                        </Button>
                      </Link>
                      <Button size="xs" variant="icon-button" onClick={(event) => deleteCurrentBook(event, book.id) }>
                        <DeleteIcon />
                      </Button>
                      <Link to={`detail/${book.id}`}>
                        <Button size="xs" variant="icon-button">
                          <ViewIcon />
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
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
import { Link } from "react-router-dom";
import { Book } from "../../../../../modules/books/models/book.model";

interface Props {
  books: Array<Book>
}

export const BooksList = ({books}: Props) => {
  return (
    <>
      <Box>
        <TableContainer 
    //           borderRadius: '2rem',
    // border:"solid 1px #E2E8F0"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Author</Th>
                <Th>Year</Th>
                <Th>Language</Th>
                <Th>Pages</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {books?.map((book: any, index: any) => {
                return (
                  <Tr key={index}>
                    <Td>{book.title}</Td>
                    <Td>{book.author}</Td>
                    <Td>{book.year}</Td>
                    <Td>{book.language}</Td>
                    <Td>{book.pages}</Td>
                    <Td>x</Td>
                    <Td>                    
                      <ButtonGroup>
                          <Link to='#'>
                            <Button
                              size="xs"
                              variant="icon-button"
                              data-testid="admin-element"
                            >
                              <EditIcon />
                            </Button>
                          </Link>
                          <Button
                            size="xs"
                            variant="icon-button"
                          >
                            <DeleteIcon />
                          </Button>
                          <Button size="xs" variant="icon-button">
                            <Link to={`book/${book.id}`}>
                              <ViewIcon />
                            </Link>
                          </Button>
                    </ButtonGroup>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

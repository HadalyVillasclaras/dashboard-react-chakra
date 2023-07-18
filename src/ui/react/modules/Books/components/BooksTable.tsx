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
import { Book } from "../../../../../core/books/models/book.model";

interface Props {
  books: Array<Book>
}

export const BooksTable = ({ books }: Props) => {
  return (
    <>
        <TableContainer >
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
                          <Button size="xs" variant="icon-button">
                            <EditIcon />
                          </Button>
                        </Link>
                        <Button size="xs" variant="icon-button">
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

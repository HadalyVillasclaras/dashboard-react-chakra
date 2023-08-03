import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Section } from "../../../shared/components/sections/Section";

export const TaskContainer = () => {
  return (
    <>
      <Section>
        <TableContainer
          whiteSpace="normal"
          borderRadius="0.7rem"
          border="solid 1px #E2E8F0"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Date</Th>
                <Th>Author</Th>
                <Th>Status</Th>
                <Th>Description</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td>x</Td>
                <Td>x</Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Section>
    </>
  );
};

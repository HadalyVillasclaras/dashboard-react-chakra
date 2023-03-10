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
import React from "react";
import { Section } from "../../../common/components/modules/Section";
import { BooksList } from "./BooksList";

export const BooksContainer = () => {
  return (
    <>
      <BooksList />
    </>
  );
};

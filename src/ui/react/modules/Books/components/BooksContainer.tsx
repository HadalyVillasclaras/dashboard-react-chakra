
import { AddIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Section } from "../../../common/components/Section";
import { BooksList } from "./BooksList";

export const BooksContainer = () => {
  return (
    <>
    <Section>
      <h4>Filters:</h4>
      <Divider m="1rem 0"/>
    </Section>
    <Section>
      <Flex justifyContent="space-between" mb="1rem">
        <h4>List:</h4>
        <Link to="/books/add">
          <Button>
            <AddIcon />
          </Button>
        </Link>
      </Flex>
      <Divider m="1rem 0"/>
      <BooksList />
    </Section>
    <Divider m="2rem 0" />

    </>
  );
};

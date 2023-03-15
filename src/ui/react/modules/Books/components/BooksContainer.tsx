
import { AddIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Section } from "../../../common/components/Section";
import { BooksList } from "./BooksList";
import booksLib from "../../../../../modules/core/books.json";
import { useEffect, useState } from "react";
import { Book } from "../../../../../modules/books/models/book.model";
import { getBooks as getBooksService } from "../../../../../modules/books/services/getBooks";

export const BooksContainer = () => {
  const [books, setBooks] = useState<Book[]>([]);

  async function getBooks() {
    await getBooksService()
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => {
        console.log(err);
      })
      
  }

  useEffect(() => {
    getBooks();
  }, [])
  

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
      <BooksList 
        books={books}
      />
    </Section>
    <Divider m="2rem 0" />

    </>
  );
};

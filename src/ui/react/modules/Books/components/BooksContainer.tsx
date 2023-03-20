import { AddIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Section } from "../../../common/components/Section";
import { BooksList } from "./BooksList";
import { useEffect, useState } from "react";
import { Book } from "../../../../../modules/books/models/book.model";
import { getBooks as getBooksService } from "../../../../../modules/books/services/getBooks";

export const BooksContainer = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState();

  
  async function getBooks() {
    await getBooksService()
      .then((res) => {
        if(!res.ok){
          throw Error('Could not fetch the data for that resource')
        }
       return res.json()
      })
      .then(data => {
        setBooks(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
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
    {isLoading ? (
      <Section>
      <div style={{ textAlign: "center" }}>
        <Spinner />
      </div>
    </Section>
    ) : (
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
      <BooksList books={books}/>
    </Section>
    )}
    <Divider m="2rem 0" />

    </>
  );
};

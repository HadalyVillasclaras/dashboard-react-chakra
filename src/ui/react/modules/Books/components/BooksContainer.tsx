import { AddIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Section } from "../../../common/components/Section";
import { BooksList } from "./BooksList";
import { useEffect, useState } from "react";
import { useGetBooks } from "../hooks/useGetBooks";

export const BooksContainer = () => {
  const [books, setBooks] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState();

  async function getBooks() {
    const {response} = await useGetBooks();
    console.log('books');
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
    <Section>
      <h4>Search:</h4>
      <Divider m="1rem 0"/>
    </Section>
    {isLoading ? (
      <Section>
      <div style={{ textAlign: "center" }}>
        {/* <Spinner /> */}
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

    </>
  );
};

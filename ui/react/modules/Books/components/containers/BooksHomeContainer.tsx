import { AddIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Section } from "../../../../shared/components/sections/Section";
import { BooksTable } from "../BooksTable";
import { useEffect, useState } from "react";
import { useGetBooks } from "../../hooks/useGetBooks";
import { getPaginationData } from "../../../../../../src/shared/utils/getPaginationData";

export const BooksHomeContainer = () => {
  const [books, setBooks] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState();
  let paginationData;

  async function getBooks() {
    const {books, pagination} = await useGetBooks();

    books &&
      setBooks(books)
      setIsLoading(false);
  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <>
      <Section>
        <h4>Search:</h4>
        <Divider m="1rem 0" />
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
          <Divider m="1rem 0" />
          <BooksTable books={books} />
        </Section>
      )}
    </>
  );
};

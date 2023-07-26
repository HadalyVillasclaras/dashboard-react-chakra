import React from 'react'
import { BooksUpdateCreateForm } from '../BooksUpdateCreateForm'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CenteredSpinner } from '../../../../shared/components/loaders/CenteredSpinner';
import { Section } from '../../../../shared/components/sections/Section';
import { useGetBookById } from '../../hooks/useGetBookById';

export const BooksUpdateContainer = () => {
  const { id } = useParams();
  const [book, setBook] = useState<any>();
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  async function getCurrentBook() {
    setIsLoading(true);
    const { book }: any = await useGetBookById(id);

    book &&
      setBook(book);
    setIsLoading(false);
  }

  useEffect(() => {
    getCurrentBook();
  }, [])

  return (
    <Section>
      {
        !isLoading
          ? <BooksUpdateCreateForm
            isEdit={true}
            currentBook={book}
            setIsSaveButtonDisabled={setIsSaveButtonDisabled}
          />
          : <CenteredSpinner />
      }
    </Section>
  )
}
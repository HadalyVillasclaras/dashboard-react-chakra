import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CenteredSpinner } from '../../../common/components/loaders/CenteredSpinner';

import { Section } from '../../../common/components/Section';
import { useGetBookById } from '../hooks/useGetBookById';
import { BookDetails } from './BookDetails';

export const BookDetailsContainer = () => {
  const { id } = useParams();
  const [book, setBook] = useState<any>();
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
    <>
      {
        !isLoading
        ? <BookDetails book={book}/>
        : <CenteredSpinner/>
      }
      <button>delete</button>
    </>
  )
}

import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Book } from '../../../../../modules/books/models/book.model';
import { getBookById as getBookByIdService} from '../../../../../modules/books/services/getBookById';
import { Section } from '../../../common/components/Section';

export const BookDetails = () => {
  const {id} = useParams();
  const [book, setBook] = useState<Book>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState();

  async function getBook() {
    await getBookByIdService(id)
      .then((res) => {
        if(!res.ok){
          throw Error('Could not fetch the data for that resource')
        }
       return res.json()
      })
      .then(data => {
        setBook(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
  }
  useEffect(() => {
    getBook();

    console.log('cleanup');
  }, [])
  
  return (
    <>
    { 
      error === undefined 
      ? 
      <Section>
        <div>Id - {book?.id}</div>
        <div>Title - {book?.title}</div>
        <div>Author - {book?.author}</div>
        <div>Year - {book?.year}</div>
        <div>Pages - {book?.pages}</div>
      </Section>
      : 
      <Text>Error on fetching book with id: {id}</Text>
    
    
    } 
    </>
  )
}

import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Section } from '../../../common/components/Section';

export const BookDetails = () => {
  const {id} = useParams();
  const [book, setBook] = useState<any>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState();




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
    <button>delete</button>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Book } from '../../../../../modules/books/models/book.model';
import { getBookById as getBookByIdService} from '../../../../../modules/books/services/getBookById';

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
        console.log(err);
        setError(err.message);

      })
      
  }

  useEffect(() => {
    getBook();

    console.log('cleanup');
  }, [])
  
  return (
    <>
    <div>BookDetails - {id}</div>
    
    </>
  )
}

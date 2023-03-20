import { useState } from 'react'
import { Book } from '../../../../../modules/books/models/book.model';
import { addBook as addBookService} from '../../../../../modules/books/services/addBook';

export const BookForm = () => {
  const [book, setBook] = useState<Book>();
  const [isPending, setIsPending] = useState(false)

  function handleSubmit(e: any) {
    e.preventDefault();
    setIsPending(true);

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // setBook({
    //   title: formJson.title,
    //   author: formJson.author,
    //   year: formJson.year,
    //   pages: formJson.pages,
    //   country: formJson.country,
    //   language: formJson.language
    // })
    addBook(formJson)
    
  }

  async function addBook(formJson: any) {
    await addBookService(formJson)
      .then((res) => {
        if(!res.ok){
          throw Error('Could not fetch the data for that resource')
        }
        console.log('new book added');
       return res.json()
      })
      .then(data => {
        setBook(data)
        setIsPending(false);

      })
      .catch((err) => {
        console.log(err);

      })
      
  }


  return (
    <>
      <h2>BookForm</h2>

      <form method='post' onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input 
          name='title'
          type="text" 
        /> <br/>
        <label htmlFor="">Author</label>
        <input 
          name='author'
          type="text" 
        /><br/>
        <label htmlFor="">Year</label>
        <input 
          name='year'
          type="number" 
        /><br/>
        <label htmlFor="">No. of pages</label>
        <input 
          name='pages'
          type="number" 
        /><br/>
        <label htmlFor="">Country</label>
        <input 
          name='country'
          type="text" 
        /><br/>
        <label htmlFor="">Language</label>
        <input 
          name='language'
          type="text" 
        /><br/>
        <br/><br/>
        <button type="reset">Reset form</button><br/>

          <button type="submit" disabled={isPending ? true : false}>Submit form</button>
        
      </form>
    
    
    </>
  )
}

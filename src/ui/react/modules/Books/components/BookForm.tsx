import { useState } from 'react'

import { useNavigate } from "react-router-dom";

export const BookForm = () => {
  const [book, setBook] = useState<any>();
  const [isPending, setIsPending] = useState(false)
  let navigate = useNavigate();

  return (
    <>
      <h2>BookForm</h2>

      <form method='post' >
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

           <button type="submit">Submit form</button> 
        
      </form>
    
    
    </>
  )
}

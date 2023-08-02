import { BookCategory } from "./Category"

export type Book = {
  id?: number,
  title: string,
  subtitle?: string,
  author: string, 
  year: number,
  category: BookCategory
  language: string, 
  country: string, 
  pages: number, 
  price?: number,
  link?: string, 
  status?: string,
  isbn?: string,
  description?: string,
}

export function ensureBookIsValid({id, title, }: Book): void {
  if (!isBookIdValid(id) {
    throw BookIdNotValidError(id);
  })

    // esto iimplica crear un fichero BookId, con la functin isBookIdValid y las excepciones, BookIdNotValidError
    // o en el propio fichero de Book, hay meter todas las validaciones, y errores 

    if (!isBookImageUrlValid(url) {
      throw BookImageUrlNotValidError(url);
    })
}
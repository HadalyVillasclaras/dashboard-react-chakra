import { Book } from "./types/Book";

export interface BookApiInterface {
  createBook(bookData: Book): any;
  updateBook(id: number, bookData: Book): any;
  getBookById(id: number): any;
  getBooks(book: Book): any;
}
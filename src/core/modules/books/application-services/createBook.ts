import { getPaginationData } from "../../../shared/utils/getPaginationData";
import { Book } from "../domain/Book";
import { BookRepoInterface } from "../domain/BookRepoInterface";
import { BookMockRepository } from "../infrastructure/BookMockRepository";

export const createBook = async(body: Book) => {
  try {
    // const jwt =  localStorage.getItem('jwt');
    const bookRepo = await (new BookMockRepository());
    const response = await bookRepo.create(body);

    let books = response.data;
    const pagination = getPaginationData(books);

    let apiInterface = {
      data: books,
      pagination: pagination,
      status: response.status
    }
    
    return apiInterface;
  } catch (error: any) {
    console.error(error.response);
    let apiError ={
      status: error.response.status,
      statusText: error.response.statusText
    }
    return apiError;
  }
}


// function createBook(bookRepo: BookRepoInterface, book: Book) {
//   //esto seria como la inversion de dependenias que hacemos en el constructuor

//   // validaciones de negocio antes de impementar repo
//   ensureBookIsValid(book) // isBookValid() etc. esto es un regla de nuestro dominio

//   bookRepo.create(bookRepo)

// }
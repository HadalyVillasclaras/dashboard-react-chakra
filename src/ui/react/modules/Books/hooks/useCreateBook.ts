import { Book } from "../../../../../core/books/Entity/Book";
import { createBook } from "../../../../../core/books/services/createBook";
import { getBookById } from "../../../../../core/books/services/getBookById";
import { getBooks } from "../../../../../core/books/services/getBooks";
import { getPaginationData } from "../../../../../core/shared/getPaginationData";

export const useCreateBook = async (formData: Book) => {
  let book: Book;
  let pagination: any;
  await createBook(formData)
    .then((resp:any) => {
      book = resp.data;
      pagination = resp.pagination;
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });

  return {book, pagination};
}
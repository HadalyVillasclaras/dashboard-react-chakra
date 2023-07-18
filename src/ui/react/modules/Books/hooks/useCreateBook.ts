import { createBook } from "../../../../../core/books/services/createBook";
import { getBookById } from "../../../../../core/books/services/getBookById";
import { getBooks } from "../../../../../core/books/services/getBooks";
import { getPaginationData } from "../../../../../core/core/getPaginationData";

export const useCreateBook = async (formData: any) => {
  let book: any;
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
import { getBookById } from "../../../../../core/books/services/getBookById";
import { getBooks } from "../../../../../core/books/services/getBooks";
import { updateBook } from "../../../../../core/books/services/updateBook";
import { getPaginationData } from "../../../../../core/core/getPaginationData";

export const useUpdateBook = async (bookId: string | undefined, formData: any) => {
  let book: any;
  let pagination: any;
  await updateBook(bookId, formData)
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
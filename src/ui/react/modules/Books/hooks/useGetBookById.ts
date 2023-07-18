import { getBookById } from "../../../../../core/books/services/getBookById";
import { getBooks } from "../../../../../core/books/services/getBooks";
import { getPaginationData } from "../../../../../core/core/getPaginationData";

export const useGetBookById = async (bookId: string | undefined) => {
  let book: any;
  let pagination: any;
  await getBookById(bookId)
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
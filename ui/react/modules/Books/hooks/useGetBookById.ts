import { getBookById } from "../../../../../src/books/application-services/getBookById";
import { getBooks } from "../../../../../src/books/application-services/getBooks";

export const useGetBookById = async (bookId: string | undefined) => {
  let book: any;
  let pagination: any;
  await getBookById(bookId)
    .then((resp:any) => {
      book = resp.data;
      pagination = resp.pagination;
    })
    .catch((err) => {
      console.log(err);
    });

  return {book, pagination};
}
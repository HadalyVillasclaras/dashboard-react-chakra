import { Book } from "../../../../../core/modules/books/domain/Book";
import { updateBook } from "../../../../../core/modules/books/application-services/updateBook";

export const useUpdateBook = async (bookId: string | undefined, data: Book) => {
  let book: any;
  let pagination: any;

  await updateBook(bookId, data)
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
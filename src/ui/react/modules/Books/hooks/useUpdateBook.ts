import { Book } from "../../../../../core/books/domain/types/Book";
import { updateBook } from "../../../../../core/books/application-services/updateBook";
import { getPaginationData } from "../../../../../core/shared/getPaginationData";

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
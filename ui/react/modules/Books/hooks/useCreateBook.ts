import { Book } from "../../../../../src/books/domain/Book";
import { createBook } from "../../../../../src/books/application-services/createBook";
import { getPaginationData } from "../../../../../src/shared/utils/getPaginationData";

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
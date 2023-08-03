import { Book } from "../../../../../core/modules/books/domain/Book";
import { createBook } from "../../../../../core/modules/books/application-services/createBook";
import { getPaginationData } from "../../../../../core/shared/utils/getPaginationData";

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
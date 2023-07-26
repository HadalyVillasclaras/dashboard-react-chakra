import { getBooks } from "../../../../../core/books/application-services/getBooks";
import { getPaginationData } from "../../../../../core/shared/getPaginationData";

export const useGetBooks = async () => {
  let books: any;
  let pagination: any;
  await getBooks()
    .then((resp:any) => {
      books = resp.data;
      pagination = resp.pagination;
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });

  return {books, pagination};
}
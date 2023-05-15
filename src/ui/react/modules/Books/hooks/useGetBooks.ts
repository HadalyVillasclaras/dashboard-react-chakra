import { getBooks } from "../../../../../core/books/services/getBooks";
import { getPaginationData } from "../../../../../core/core/getPaginationData";

export const useGetBooks = async() => {
  let response: any = {};
  
  await getBooks()
    .then((resp) => {
      response.books = resp.data.json();
    })
    .catch((err) => {
      console.log(err);
    });


  return response.books;
}
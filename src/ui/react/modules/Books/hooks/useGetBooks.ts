import { getBooks } from "../../../../../core/books/services/getBooks";

export const useGetBooks = async() => {
  const response: any = {};

  await getBooks() 
    .then((response) => {
      response.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
}
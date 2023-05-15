export const getBooks = async() => {
  const url = import.meta.env.VITE_API_BASEURL + 'books';

  let response:any = {};

  response.data = await fetch(url);
  return response
}
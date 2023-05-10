export const getBooks = async() => {

  const API_URL = 'http://localhost:3500/books';

  const response = await fetch(API_URL);
  return response
}
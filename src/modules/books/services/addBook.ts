export const addBook = async(body: any) => {
console.log(body);
  const API_URL = 'http://localhost:3500/books';

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  });

  return response
}
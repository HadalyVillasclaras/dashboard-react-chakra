export const deleteBook = async(id: any) => {

  const url = `http://localhost:3500/books/${id}`;

  const response = await fetch(url, {
    method: 'DELETE'
  });

  return response
}

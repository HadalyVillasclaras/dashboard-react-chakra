
export const getBookById = async(id: any) => {
  const url = `${import.meta.env.VITE_API_BASEURL}/books/${id}`;

  const response = await fetch(url);

  return response
}

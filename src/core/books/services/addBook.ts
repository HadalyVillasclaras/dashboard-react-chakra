export const addBook = async(body: any) => {
console.log(body);
  const url = import.meta.env.VITE_API_BASEURL;

  const response = await fetch(url, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
  });

  return response
}
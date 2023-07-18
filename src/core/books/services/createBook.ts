import { getPaginationData } from "../../core/getPaginationData";
import { http } from "../../http";

export const createBook = async(body: any) => {
  try {
    // transform body to back format
    const url = import.meta.env.VITE_API_BASEURL + 'books';
    // const jwt =  localStorage.getItem('jwt');
    const httpRequest = await (new http(url, 'POST', body).request());
    const books = httpRequest.data;
    const pagination = getPaginationData(books);

    let apiInterface = {
      data: books,
      pagination: pagination,
      status: httpRequest.status
    }
    
    return apiInterface;
  } catch (error: any) {
    console.error(error.response);
    let apiError ={
      status: error.response.status,
      statusText: error.response.statusText
    }
    return apiError;
  }
}
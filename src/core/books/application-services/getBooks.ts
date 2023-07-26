import { getPaginationData } from "../../shared/getPaginationData";
import { http } from "../../http";

export const getBooks = async() => {
  try {
    const url = import.meta.env.VITE_API_BASEURL + 'books';
    // const jwt =  localStorage.getItem('jwt');
    const httpRequest = await (new http(url, 'GET').request());
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
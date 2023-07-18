import { getPaginationData } from "../../core/getPaginationData";
import { http } from "../../http";

export const getBookById = async(id: any) => {
  try {
    const url = `${import.meta.env.VITE_API_BASEURL}books/${id}`;
    // const jwt =  localStorage.getItem('jwt');
    const httpRequest = await (new http(url, 'GET').request());
    const book = httpRequest.data;
    const pagination = getPaginationData(book);

    let apiInterface = {
      data: book,
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

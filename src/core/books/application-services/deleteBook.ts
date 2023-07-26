import { getPaginationData } from "../../shared/getPaginationData";
import { http } from "../../http";

export const deleteBook = async(id: any) => {
  try {
    const url = `${import.meta.env.VITE_API_BASEURL}books/${id}`;

    const httpRequest = await (new http(url, 'DELETE').request());
    return httpRequest;
    const book = httpRequest.data;
    const pagination = getPaginationData(book);
    console.log(httpRequest);
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

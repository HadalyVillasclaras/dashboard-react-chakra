import { getPaginationData } from "../../shared/utils/getPaginationData";
import { AxiosHttp } from "../../shared/lib/AxiosHttp";
import { Book } from "../domain/Book";
import { BookMockRepository } from "../infrastructure/BookMockRepository";

export const getBookById = async(id: any) => {
  try {
    // const jwt =  localStorage.getItem('jwt');
    const bookRepo = await (new BookMockRepository());
    const response = await bookRepo.getById(id);

    const book = response.data;
    const pagination = getPaginationData(book);

    let apiInterface = {
      data: book,
      pagination: pagination,
      status: response.status
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


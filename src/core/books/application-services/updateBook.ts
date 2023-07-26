import { getPaginationData } from "../../shared/utils/getPaginationData";
import { Book } from "../domain/Book";
import { BookMockRepository } from "../infrastructure/BookMockRepository";

export const updateBook = async(id: any, body: any) => {
  try {
    // const jwt =  localStorage.getItem('jwt');
    const bookRepo = await (new BookMockRepository());
    const response = await bookRepo.update(id, body);

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
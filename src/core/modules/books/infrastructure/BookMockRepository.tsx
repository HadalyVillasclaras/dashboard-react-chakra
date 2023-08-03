import { Book } from "../domain/Book";
import { BookRepoInterface } from "../domain/BookRepoInterface";
import axios from "axios";

export type httpMethods = "GET" | 'POST' | 'PUT' | 'DELETE';


export class BookMockRepository implements BookRepoInterface {
  headers: any = { 'Content-Type': 'application/json' };
	url: string = `${import.meta.env.VITE_API_BASEURL}books/`;


  async create(bookData: Book): Promise<any> {
    const response =  await axios({
      method: 'POST',
      url: this.url,
      headers: this.headers,
      data: bookData
    });
    return response;
  }

  async update(id: number, bookData: Book): Promise<any> {
      const response =  await axios({
      method: 'PUT',
      url: this.url + id,
      headers: this.headers,
      data: bookData
    });
    return response;
  }

  async getById(id: number): Promise<any> {
    const response =  await axios({
      method: 'GET',
      url: this.url + id,
      headers: this.headers
    });
    return response;
  }

  async getAll(): Promise<any> {
    const response =  await axios({
      method: 'GET',
      url: this.url,
      headers: this.headers,
    });
    return response;
  }
}
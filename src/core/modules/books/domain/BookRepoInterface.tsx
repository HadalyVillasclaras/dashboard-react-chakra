import { Book } from "./Book";

export interface BookRepoInterface {
  create(bookData: Book): any;
  update(id: number, bookData: Book): any;
  getById: (id: number) => Book | null;
  getAll: () => Book[];
}
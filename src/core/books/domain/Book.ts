import { BookCategory } from "./Category"

export type Book = {
  id?: number,
  title: string,
  subtitle?: string,
  author: string, 
  year: number,
  category: BookCategory
  language: string, 
  country: string, 
  pages: number, 
  price?: number,
  link?: string, 
  status?: string,
  isbn?: string,
  description?: string,
}
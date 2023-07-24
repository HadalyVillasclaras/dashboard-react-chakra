import { Category } from "./Category"

export interface Book {
  id?: number,
  title: string,
  subtitle?: string,
  author: string, 
  year: number,
  category: Category
  language: string, 
  country: string, 
  pages: number, 
  price?: number,
  link?: string, 
  status?: string,
  isbn?: string,
  description?: string,
  url?: string
}
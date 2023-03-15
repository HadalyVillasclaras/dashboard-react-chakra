export interface Book {
  title: string,
  author: string, 
  year: number,
  category?: string
  language: string, 
  country: string, 
  pages: number, 
  price?: number
  imageLink?: string, 
  link?: string, 
  status?: string
}
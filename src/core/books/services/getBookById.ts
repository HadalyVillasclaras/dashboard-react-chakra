import React from 'react'

export const getBookById = async(id: any) => {

  const url = `http://localhost:3500/books/${id}`;

  const response = await fetch(url);

  return response
}

import { getPaginationData } from "../../core/getPaginationData";

export const getBooks = async() => {
  const url = import.meta.env.VITE_API_BASEURL + 'books';

  try {
    const response = await fetch(url);

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("Error al obtener libros");
    }

    // Convirtiendo la respuesta a JSON
    const data = await response.json();

    let apiInterface = {
      data: data,
      pagination: [],
      error: ''
    }
  
    
    // apiInterface.pagination = getPaginationData(data);

    console.log(apiInterface);
    return apiInterface;

  } catch (error) {
    console.error("Ha ocurrido un error: ", error);
    return {
      data: [],
      pagination: [],
      error: error.message
    }
  }
}
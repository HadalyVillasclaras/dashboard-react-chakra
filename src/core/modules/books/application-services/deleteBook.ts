import { getPaginationData } from "../../../shared/utils/getPaginationData";

export const deleteBook = async(id: any) => {
  try {

    // let apiInterface = {
    //   data: book,
    //   pagination: pagination,
    //   status: httpRequest.status
    // }
    
    // return apiInterface;
  } catch (error: any) {
    console.error(error.response);
    let apiError ={
      status: error.response.status,
      statusText: error.response.statusText
    }
    return apiError;
  }
}

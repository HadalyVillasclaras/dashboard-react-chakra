export const getPaginationData = (data:any) => {

  let paginationData = {
    limit: 10,
    totalData: 0,
    currentPage: 1,
    pages: 0
  }

  if(data) {
    paginationData.totalData = data.length;
    paginationData.pages = Math.ceil(data.length / paginationData.limit);
  }
  
return paginationData
}
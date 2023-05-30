export const getPaginationData = (data:any, limit:number = 10) => {

  let paginationData = {
    limit: limit,
    totalData: data.length,
    currentPage: 1,
    pages: Math.ceil(data.length / limit)
  }

  if(data) {
    paginationData.totalData = data.length;
    paginationData.pages = Math.ceil(data.length / paginationData.limit);
  }
  
return paginationData
}
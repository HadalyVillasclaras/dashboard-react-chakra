import { useMemo } from 'react'

interface Props {
    totalPages: number,
    currentPage: number,
    pageSize: number,
    totalData: number,
    siblingCount?: number
  }

export const DOTS = '...';

const range = (start: number, end:number) => {
    let length = end - start + 1;
    const rangeArray = Array.from({ length }, (_, idx) => idx + start);
    return rangeArray
};

export const usePagination = ({totalPages, currentPage, pageSize, totalData, siblingCount = 1}: Props) => {

    const paginationRange = useMemo(() => {
        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min( 
            currentPage + siblingCount, 
            totalPages
        );


        if (totalPages <= 4) {
            return range(1, totalPages)
        }
        
        const leftDots = leftSiblingIndex > 2;
        const rightDots = rightSiblingIndex <= totalPages - 2; 

        if (!leftDots && rightDots) {
            let leftItemCount = 1 + 2 * siblingCount; 
            let leftRange = range(1, leftItemCount);
      
            return [...leftRange, DOTS, totalPages];
        }

        if (leftDots && !rightDots) {
            let rightItemCount = 1 + 2 * siblingCount; 
            let rightRange = range(totalPages - rightItemCount + 1,
                totalPages
            );
      
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (leftDots && rightDots) {
            let midRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...midRange, DOTS, lastPageIndex];
        }

        return range(1, totalPages)

    }, [totalPages, currentPage, pageSize, siblingCount, totalData])

  return (
    paginationRange
  )
}

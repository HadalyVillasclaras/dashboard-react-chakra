import React from "react";
import { Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Select, Spacer, Text } from '@chakra-ui/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import { DOTS, usePagination } from "./hook/usePagination";

interface Props {
  totalPages: number,
  currentPage: number,
  onPageChange: Function,
  onPageSizeChange: Function,
  pageSize: number,
  totalData: number
}

export const Pagination = ({ totalPages, currentPage, onPageChange, onPageSizeChange, pageSize, totalData }: Props) => {
  const paginationRange = usePagination({ totalPages, currentPage, pageSize, totalData });
  function goToPage(page: number) {
    onPageChange(page)
  }

  function changePageSize(e: React.ChangeEvent<HTMLSelectElement>) {
    const pageSize = e.target.value;
    onPageSizeChange(pageSize)
  }

  return ( 
    <Box id="pagination">
      <Flex flexDirection='column' alignItems='center'>
        <Flex className="pagination"  gap='2'>
          <Button role="button" size='xs' isDisabled={currentPage === 1} onClick={() => { goToPage(currentPage - 1) }} disabled={true}><ArrowLeftIcon /></Button>
          <ButtonGroup gap='0.5rem'>
            {
              paginationRange?.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                  return <Text fontWeight='bold' key={i}>{DOTS}</Text>;
                }

                return (
                  <Button size='xs' bg='gray.400' _active={{ backgroundColor: 'gray.500' }} isActive={pageNumber === currentPage} key={i} onClick={() => { goToPage(+pageNumber) }}>{pageNumber}</Button>
                )
              }
              )}
          </ButtonGroup>
          <Button size='xs' onClick={() => { goToPage(currentPage + 1) }} isDisabled={currentPage === totalPages}><ArrowRightIcon /></Button>
        </Flex>
        <FormControl m='0.5rem 0' display='flex' alignItems='center' justifyContent='center'>
          <FormLabel mb='0' fontSize="12px">Items per page</FormLabel>
          <Select onChange={(e) => { changePageSize(e) }} size='xs' display='inline' width='fit-content'>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </Select>
        </FormControl>
      </Flex>
    </Box>
  )
};
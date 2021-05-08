import { Stack, Button, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const SIBLINGS_COUNT = 1;

export function Pagination({
  totalCountOfRegisters,
  registersPerPage,
  currentPage,
  onPageChange
}: PaginationProps) {
  const lastPage =  Math.floor(totalCountOfRegisters / registersPerPage);

  function generatePagesArray(from: number, to: number) {
    return [new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter(page => page > 0)
  }

  const previousPage = currentPage > 1
  ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
  : []

  const nextPage = currentPage > 1
  ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
  : []

  return (
    <Stack
      direction={['column', 'row']}
      mt='8'
      spacing='6'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <PaginationItem pageNumber={1} isCurrent />      
        <PaginationItem pageNumber={2} />      
        <PaginationItem pageNumber={3} />      
      </Stack>
    </Stack>
  );
}
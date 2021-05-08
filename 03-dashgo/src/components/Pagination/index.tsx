import { Stack, Button, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const SIBLINGS_COUNT = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage =  Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + SIBLINGS_COUNT, lastPage))
    : [];

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
        {
          currentPage > (1 + SIBLINGS_COUNT) && (
            <>
              <PaginationItem pageNumber={1} onPageChange={onPageChange}/>
              { currentPage > (2 + SIBLINGS_COUNT) && (
                <Text 
                  color='gray.500' 
                  width='8' 
                  textAlign='center'
                >
                  ...
                </Text>
              )}
            </>
          )
        }
        {
          previousPages.length > 0 && previousPages.map(page => {
            return <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
          })
        }
        <PaginationItem pageNumber={currentPage} isCurrent onPageChange={onPageChange}/>
        {
          nextPages.length > 0 && nextPages.map(page => {
            return <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange}/>
          })
        }
        {
          (currentPage + SIBLINGS_COUNT) < lastPage &&
            <> 
              { (currentPage + 1 + SIBLINGS_COUNT) < lastPage && (
                <Text 
                  color='gray.500' 
                  width='8' 
                  textAlign='center'
                >
                  ...
                </Text>
              )}
              <PaginationItem pageNumber={lastPage} onPageChange={onPageChange}/>
            </>
        }        
      </Stack>
    </Stack>
  );
}
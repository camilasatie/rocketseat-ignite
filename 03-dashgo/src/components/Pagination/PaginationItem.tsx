import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
  onPageChange: (page:number) => void;
}

export function PaginationItem({ 
  isCurrent = false, 
  pageNumber,
  onPageChange 
}: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button
      size='sm'
      fontSize='xs'
      width='4'
      colorScheme='pink'
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default',
      }}
      >
        { pageNumber }
      </Button>
    );
  }

  return (
      <Button 
      size='sm'
      fontSize='xs'
      width='4'
      bgColor='gray.700'
      _hover={{
        bg: 'gray.500',
        cursor: 'pointer',
      }}
      onClick={() => onPageChange(pageNumber)}
    >
      { pageNumber }
    </Button>
  )
}
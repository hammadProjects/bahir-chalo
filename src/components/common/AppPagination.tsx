import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange?: (page: number) => void;
}

const AppPagination: React.FC<Props> = ({
  totalPages,
  currentPage,
  hasNext,
  hasPrev,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  return (
    <Pagination>
      <PaginationContent>
        {pages?.length > 0 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageClick(currentPage - 1)}
              className={hasPrev ? "" : "opacity-50 pointer-events-none"}
            />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className={
                page === currentPage
                  ? "font-bold bg-emerald-500 hover:bg-emerald-500/80 hover:text-white text-white hover"
                  : ""
              }
              onClick={() => handlePageClick(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {pages?.length > 0 && (
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageClick(currentPage + 1)}
              className={hasNext ? "" : "opacity-50 pointer-events-none"}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default AppPagination;

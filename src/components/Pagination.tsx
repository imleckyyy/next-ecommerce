import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface PaginationItemProps {
  currentPage: number;
  pageNumber: number;
  setPage: Dispatch<SetStateAction<number>>;
  path: string;
}

const PaginationItem = ({
  currentPage,
  setPage,
  path,
  pageNumber,
}: PaginationItemProps) => {
  const linkClass =
    pageNumber === currentPage
      ? "border-black text-black border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";

  return (
    <li>
      <Link
        href={`${path}/${pageNumber}`}
        className={linkClass}
        onClick={() => setPage(pageNumber)}
      >
        {pageNumber}
      </Link>
    </li>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
  path: string;
  wrapperClass: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  setPage,
  path,
  wrapperClass = "",
}: PaginationProps) => {
  return (
    <>
      <nav
        className={`border-t border-gray-200 px-4 flex items-center justify-end sm:px-0 ${wrapperClass}`}
      >
        <ul className="md:-mt-px flex flex-wrap">
          {currentPage > 1 && (
            <Link
              href={`${path}/${currentPage - 1}`}
              onClick={() => setPage(currentPage - 1)}
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              {"<"}
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem
              key={i}
              pageNumber={i + 1}
              currentPage={currentPage}
              setPage={setPage}
              path={path}
            />
          ))}
          {currentPage !== totalPages && (
            <Link
              href={`${path}/${currentPage + 1}`}
              onClick={() => setPage(currentPage + 1)}
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              {">"}
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

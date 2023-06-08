import { useState } from "react";

const Pagination = ({ setCurrPage }) => {
  const handleClickNext = () => {
    setCurrPage((prev) => prev + 1);
  };

  const handleClickPrev = () => {
    setCurrPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <nav className="pt-20 text-center">
      <ul className="inline-flex -space-x-px">
        <li onClick={handleClickPrev}>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li onClick={handleClickNext}>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

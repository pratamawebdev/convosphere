import React from "react";
import { Button } from "./Button";

interface PaginationProps {
  nextOnClick: () => void;
  prevOnClick: () => void;
  disabledPrev?: boolean;
  disabledNext?: boolean;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { nextOnClick, prevOnClick, disabledPrev, currentPage, disabledNext } =
    props;
  return (
    <div className="flex items-center gap-4">
      <Button onClick={prevOnClick} disabled={disabledPrev} ariaLabel="prev">
        Previous
      </Button>
      <span className="font-semibold border-2 px-3 py-2 rounded-lg ">
        {currentPage}
      </span>
      <Button onClick={nextOnClick} disabled={disabledNext} ariaLabel="next">
        Next
      </Button>
    </div>
  );
};

export default Pagination;

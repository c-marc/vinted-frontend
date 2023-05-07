import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { getPageMax } from "../../utils/utils";

import "./pageNav.css";

const PageNav = ({ page, limit, count, setPage }) => {
  const pageMax = getPageMax(limit, count);

  const handlePageChange = (event) => {
    let newPage = Math.round(event.target.valueAsNumber);
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > pageMax) {
      newPage = pageMax;
    }
    setPage(newPage);
  };

  return (
    <div className="page-nav-container">
      <ChevronLeftIcon
        onClick={() => setPage(page - 1)}
        disabled={!page || page === 1}
      />
      <input type="number" value={page || 1} onChange={handlePageChange} />
      <ChevronRightIcon
        onClick={() => setPage(page + 1)}
        disabled={!page || page === pageMax}
      />
    </div>
  );
};

export default PageNav;

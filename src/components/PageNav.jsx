import { getPageMax } from "../utils/utils";

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
    <div className="page-nav">
      <p>Page</p>
      <button onClick={() => setPage(page - 1)} disabled={!page || page === 1}>
        -
      </button>
      <input type="number" value={page || 1} onChange={handlePageChange} />
      <button
        onClick={() => setPage(page + 1)}
        disabled={!page || page === pageMax}
      >
        +
      </button>
    </div>
  );
};

export default PageNav;

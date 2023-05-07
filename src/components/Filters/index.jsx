import SortButton from "../SortButton/SortButton";
import DoubleSlider from "../DoubleSlider";
import PageNav from "../PageNav";
import PageLimit from "../PageLimit";

import "./filters.css";

const Filters = ({ filters, setFilters, count, setSearch }) => {
  const { sort, priceMin, priceMax, page, limit } = filters;
  // console.log(filters);

  return (
    <div className="filters-container">
      {/* Reset */}
      <button
        onClick={() => {
          const newFilters = { ...filters };
          for (const k of Object.keys(newFilters)) {
            newFilters[k] = null;
          }
          setFilters(newFilters);
          setSearch("");
        }}
      >
        Annuler tous les filtres
      </button>

      <div className="group">
        <span>Trier par</span>
        <SortButton
          state={sort}
          setState={(value) => setFilters({ ...filters, sort: value })}
        />
      </div>

      <DoubleSlider
        min={priceMin}
        max={priceMax}
        setMinAndMax={(newMin, newMax) =>
          setFilters({ ...filters, priceMin: newMin, priceMax: newMax })
        }
      />

      <div className="group">
        <span>Page</span>
        <PageNav
          page={page}
          limit={limit}
          count={count}
          setPage={(value) => setFilters({ ...filters, page: value })}
        />
      </div>

      <div className="group">
        <span>Art. par page</span>
        <PageLimit
          limit={limit}
          setLimitAndPage={(newLimit, newPage) =>
            setFilters({ ...filters, limit: newLimit, page: newPage })
          }
        />
      </div>
    </div>
  );
};

export default Filters;

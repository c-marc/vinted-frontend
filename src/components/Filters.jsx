import ButtonSeq from "./ButtonSeq";
import DoubleSlider from "./DoubleSlider";
import PageNav from "./PageNav";
import PageLimit from "./PageLimit";

const Filters = ({ filters, setFilters, count, setSearch }) => {
  const { sort, priceMin, priceMax, page, limit } = filters;
  console.log(filters);
  return (
    <div className="filters">
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

      <ButtonSeq
        state={sort}
        setState={(value) => setFilters({ ...filters, sort: value })}
        levels={[
          { value: null, label: "Prix ↕" },
          { value: "price-asc", label: "Prix ↗" },
          { value: "price-desc", label: "Prix ↘" },
        ]}
      />

      <DoubleSlider
        min={priceMin}
        max={priceMax}
        setMinAndMax={(newMin, newMax) =>
          setFilters({ ...filters, priceMin: newMin, priceMax: newMax })
        }
      />

      <PageNav
        page={page}
        limit={limit}
        count={count}
        setPage={(value) => setFilters({ ...filters, page: value })}
      />

      <PageLimit
        limit={limit}
        setLimitAndPage={(newLimit, newPage) =>
          setFilters({ ...filters, limit: newLimit, page: newPage })
        }
      ></PageLimit>
    </div>
  );
};

export default Filters;

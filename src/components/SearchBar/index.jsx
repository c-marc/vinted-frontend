import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import "./searchBar.css";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher des articles"
      />
      <MagnifyingGlassIcon />
    </div>
  );
};

export default SearchBar;

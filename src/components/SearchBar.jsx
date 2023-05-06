const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      className="search-bar"
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Rechercher des articles"
    />
  );
};

export default SearchBar;

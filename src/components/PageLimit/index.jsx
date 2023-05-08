import "./pageLimit.css";

const PageLimit = ({ limit, setLimitAndPage }) => {
  const handleLimitChange = (event) => {
    // Cast as Number or null
    const newLimit =
      event.target.value === "all" ? null : Number(event.target.value);
    // Reset page to prevent inconsitencies
    setLimitAndPage(newLimit, 1);
  };

  // Beware of type for value for select and control
  // string for everything
  const value = limit ? limit.toString() : "all";

  return (
    <div className="page-limit-container">
      <select value={value} onChange={handleLimitChange}>
        <option value="all">tout</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default PageLimit;

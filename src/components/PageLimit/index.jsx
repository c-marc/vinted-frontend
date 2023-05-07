import "./pageLimit.css";

const PageLimit = ({ limit, setLimitAndPage }) => {
  const handleLimitChange = (event) => {
    const newLimit =
      event.target.value === "all" ? null : Number(event.target.value);
    setLimitAndPage(newLimit, 1);
  };

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

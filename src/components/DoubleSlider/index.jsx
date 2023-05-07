import "./doubleSlider.css";

const DoubleSlider = ({ min, max, setMinAndMax }) => {
  // Upper bound, could be a prop for a more generalizable component
  const MAX_LIMIT = 200;

  // Helpers: filters value are set to null
  const limitMin = (value) => (value <= 0 ? null : value);
  const limitMax = (value) => (value >= MAX_LIMIT ? null : value);

  const handleMinChange = (e) => {
    const newMin = e.target.valueAsNumber;
    const newMax = !max ? null : Math.max(max, newMin + 10);
    setMinAndMax(limitMin(newMin), limitMax(newMax));
  };

  const handleMaxChange = (e) => {
    const newMax = e.target.valueAsNumber;
    const newMin = !min ? null : Math.min(min, newMax - 10);
    setMinAndMax(limitMin(newMin), limitMax(newMax));
  };

  return (
    <div className="double-slider-container">
      <div className="slider">
        <label htmlFor="min">Prix min</label>
        <input
          className={max === null ? "inactive" : ""}
          id="min"
          type="range"
          min="0"
          max={MAX_LIMIT}
          step="10"
          value={min || 0}
          onChange={handleMinChange}
        />
        <p>{min ? min : "pas de limite"}</p>
      </div>

      <div className="slider">
        <label htmlFor="max">Prix max</label>
        <input
          className={max === null ? "inactive" : ""}
          id="max"
          type="range"
          min="0"
          max={MAX_LIMIT}
          step="10"
          value={max || MAX_LIMIT}
          onChange={handleMaxChange}
        />
        <p>{max ? max : "pas de limite"}</p>
      </div>
    </div>
  );
};

export default DoubleSlider;

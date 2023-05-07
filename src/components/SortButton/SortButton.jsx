import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/solid";

import "./sortButton.css";

const SortButton = ({ state, setState }) => {
  const levels = [null, "price-asc", "price-desc"];
  let icon = undefined;
  if (state === "price-asc") {
    icon = <ChevronUpIcon />;
  } else if (state === "price-desc") {
    icon = <ChevronDownIcon />;
  } else {
    icon = <ChevronUpDownIcon />;
  }

  const length = levels.length;

  const handleClick = () => {
    const index = levels.findIndex((level) => level === state);
    setState(levels[(index + 1) % length]);
  };

  return (
    <button className="sort-button" onClick={handleClick}>
      <span>Prix</span>
      {icon}
    </button>
  );
};

export default SortButton;

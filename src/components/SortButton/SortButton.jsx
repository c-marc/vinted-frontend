import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/solid";

import "./sortButton.css";

const SortButton = ({ state, setState }) => {
  // The sequence of states
  const levels = [null, "price-asc", "price-desc"];

  // Match the icon to current state
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
    // Find current index
    const index = levels.findIndex((level) => level === state);
    // Loop over levels
    // Note that if find returns -1, it safely transforms to 0
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

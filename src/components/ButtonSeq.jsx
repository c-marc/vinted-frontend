// levels as {value, label}, ... ]
const ButtonSeq = ({ state, setState, levels }) => {
  const length = levels.length;

  const index = levels.findIndex((level) => level.value === state);

  return (
    <button
      className={state === null ? "inactive" : ""}
      onClick={() => setState(levels[(index + 1) % length].value)}
    >
      {levels[index].label}
    </button>
  );
};

export default ButtonSeq;

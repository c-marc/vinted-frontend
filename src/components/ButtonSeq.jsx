const ButtonSeq = ({ index, setIndex, levels }) => {
  const length = levels.length;

  return (
    <button
      disabled={levels[index].disabled}
      onClick={() => setIndex((index + 1) % length)}
    >
      {levels[index].label}
    </button>
  );
};

export default ButtonSeq;

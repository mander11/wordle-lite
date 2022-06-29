import classNames from "classnames";

const LetterResult = (props) => {
  const letterClass = classNames({
    "letter-exists": props.isPresent,
    "letter-wrong": !props.isPresent,
  });
  const letterId = "letter-" + props.position;

  return (
    <div className={letterClass} id={letterId}>
      {props.letter}
    </div>
  );
};

export default LetterResult;

function getLetterStyle(props) {
  if (props.correctPosition) return "letter-correct";
  else if (props.isPresent) return "letter-exists";
  else return "letter-wrong";
}

const LetterResult = (props) => {
  const letterStyle = getLetterStyle(props);
  const letterId = "letter-" + props.position;

  return (
    <div className={letterStyle} id={letterId}>
      {props.letter}
    </div>
  );
};

export default LetterResult;

const LetterResult = (props) => {
  const letterStyle = props.isPresent ? "letter-exists" : "letter-wrong";
  const letterId = "letter-" + props.position;

  return (
    <div class={letterStyle} id={letterId}>
      {props.letter}
    </div>
  );
};

export default LetterResult;

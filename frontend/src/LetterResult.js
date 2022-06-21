const LetterResult = (props) => {
    const styleClass = props.isPresent ? "letter-exists" : "letter-wrong"

    return (
      <div class={styleClass} id='letter-{props.position}'>
        {props.letter}
      </div>
    );
  };
  
  export default LetterResult;
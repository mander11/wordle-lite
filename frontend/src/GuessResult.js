import LetterResult from "./LetterResult";

const GuessResult = (props) => {
  return (
    <div>
      {props.letterResults.map((letterResult) => (
        <LetterResult key={letterResult.position}
          isPresent={letterResult.isPresent}
          position={letterResult.position}
          letter={letterResult.letter}
        />
      ))}
    </div>
  );
};

export default GuessResult;

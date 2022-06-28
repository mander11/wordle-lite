import LetterResult from "./LetterResult";

const GuessResult = (props) => {
  return (
    <div className="container">
      {props.letterResults.map((letterResult) => (
        <LetterResult
          key={letterResult.position}
          isPresent={letterResult.isPresent}
          position={letterResult.position}
          correctPosition={letterResult.correctPosition}
          letter={letterResult.letter}
        />
      ))}
    </div>
  );
};

export default GuessResult;

import { LetterResult } from "./LetterResult";

export const GuessResult = (props) => {
  return (
    <div className="container">
      {props.letterResults.map((letterResult, index) => (
        <LetterResult
          key={index}
          isPresent={letterResult.isPresent}
          position={index}
          letter={letterResult.letter}
        />
      ))}
    </div>
  );
};

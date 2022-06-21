import LetterResult from "./LetterResult";

const GuessResult = (props) => {
  // const blankText = "";
  // const resultText = props.guessCorrectness
  //   ? "Nice!"
  //   : "Oh... roasted...  Try again if you dare!";

  return (
    // <div data-testid="one">
    //   {props.guessSubmitted ? <h3>{resultText}</h3> : <h3>{blankText}</h3>}
    // </div>
    <div>
      {props.letterResults.map((letterResult) => (
        <LetterResult 
          isPresent={letterResult.isPresent}
          position={letterResult.position}
          letter={letterResult.letter}
          />
      ))}
    </div>
  );
};

// {pets.map((pet) => (
//   <Pet
//     name={pet.name}
//     animal={pet.animal}
//     breed={pet.breed}
//     key={pet.id}
//   />
// ))}

export default GuessResult;

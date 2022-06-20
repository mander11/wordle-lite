import { useState } from "react";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult.js";
import useGuessChecker from "./useGuessChecker";

const HomePage = () => {
  const [finalGuessName, setFinalGuessName] = useState("");
  const [guessCorrectness, guessSubmitted] = useGuessChecker(finalGuessName);

  return (
    <div>
      <h2>Try to the guess the wordle of the day!</h2>
      <GuessInput setFinalGuessName={setFinalGuessName} />
      <GuessResult
        guessSubmitted={guessSubmitted}
        guessCorrectness={guessCorrectness}
      />
    </div>
  );
};

export default HomePage;

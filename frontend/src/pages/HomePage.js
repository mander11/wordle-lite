import { useState } from "react";
import GuessInput from "../components/GuessInput";
import GuessResult from "../components/GuessResult.js";
import useGuessChecker from "../hooks/useGuessChecker";

const HomePage = () => {
  const [finalGuessName, setFinalGuessName] = useState("");
  const [letterResults, guessSubmitted] = useGuessChecker(finalGuessName);

  return (
    <div>
      <h2>Try to guess the wordle of the day!</h2>
      <GuessInput setFinalGuessName={setFinalGuessName} />
      <GuessResult
        guessSubmitted={guessSubmitted}
        letterResults={letterResults}
      />
    </div>
  );
};

export default HomePage;

import { useState, useEffect } from "react";
import { GuessInput } from "../components/GuessInput";
import { GuessResult } from "../components/GuessResult.js";
import { submitGuess } from "../services/submitGuess";

export const HomePage = () => {
  const [finalGuessName, setFinalGuessName] = useState("");
  const [letterResults, setLetterResults] = useState([]);

  useEffect(async () => {
    const guessResponse = await submitGuess(finalGuessName);
    const responseAsJson = await guessResponse.json();
    setLetterResults(responseAsJson);
  }, [finalGuessName]);

  return (
    <div>
      <h2>Try to guess the wordle of the day!</h2>
      <GuessInput setFinalGuessName={setFinalGuessName} />
      <GuessResult letterResults={letterResults} />
    </div>
  );
};

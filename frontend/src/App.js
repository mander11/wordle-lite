import { render } from "react-dom";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult.js";
import { useState } from "react";

const App = () => {
  const [finalGuessName, setFinalGuessName] = useState("");
  const [guessCorrectness, setGuessCorrectness] = useState(false);
  const [guessSubmitted, setGuessSubmitted] = useState(false);

  async function checkGuess(guessName) {
    setGuessSubmitted(true);
    setFinalGuessName(guessName);
    const res = await fetch(`http://localhost:3001/api/guess/`, {
      method: "POST",
      body: JSON.stringify({ guessName }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await res.json();
    setGuessCorrectness(json.isGuessCorrect);
  }

  return (
    <div>
      <h2>Try to the guess the wordle of the day!</h2>
      <GuessInput checkGuess={checkGuess} />
      <GuessResult
        finalGuessName={finalGuessName}
        guessCorrectness={guessCorrectness}
        guessSubmitted={guessSubmitted}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));

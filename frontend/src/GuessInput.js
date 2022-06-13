import { useState } from "react";
import GuessResult from "./GuessResult.js";

const GuessInput = () => {
  const [guessName, setGuessName] = useState("");
  const [finalGuessName, setFinalGuessName] = useState("");
  const [guessCorrectness, setGuessCorrectness] = useState("");

  async function checkGuess() {
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
    <div className="user-input-guess">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkGuess();
        }}
      >
        <input
          type="text"
          id="guess"
          value={guessName}
          name="guessName"
          onChange={(e) => setGuessName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <GuessResult
        finalGuessName={finalGuessName}
        guessCorrectness={guessCorrectness}
      />
    </div>
  );
};

export default GuessInput;

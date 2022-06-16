import { useState } from "react";

const GuessInput = ({ checkGuess }) => {
  const [guessName, setGuessName] = useState("");

  return (
    <div className="user-input-guess">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkGuess(guessName);
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
    </div>
  );
};

export default GuessInput;

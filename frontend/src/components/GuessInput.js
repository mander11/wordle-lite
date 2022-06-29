import { useState } from "react";

export const GuessInput = (props) => {
  const [guessName, setGuessName] = useState("");

  return (
    <div className="user-input-guess">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setFinalGuessName(guessName);
        }}
      >
        <input
          type="text"
          id="guess"
          value={guessName}
          name="guessName"
          onChange={(e) => {
            setGuessName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

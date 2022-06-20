import { useState } from "react";

// const GuessInput = ({ checkGuess }, { setGuessSubmitted }) => {
const GuessInput = (props) => {
  const [guessName, setGuessName] = useState("");

  return (
    <div className="user-input-guess">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          {
            props.checkGuess(guessName);
          }
        }}
      >
        <input
          type="text"
          id="guess"
          value={guessName}
          name="guessName"
          onChange={(e) => {
            setGuessName(e.target.value);
            {
              props.setGuessSubmitted(false);
            }
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GuessInput;

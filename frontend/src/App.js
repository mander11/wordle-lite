import { render } from "react-dom";
import GuessInput from "./GuessInput";

const App = () => {
  return (
    <div>
      <h2>Try to the guess the wordle of the day!</h2>
      <GuessInput />
    </div>
  );
};

render(<App />, document.getElementById("root"));

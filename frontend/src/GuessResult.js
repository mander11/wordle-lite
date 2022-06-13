const GuessResult = (props) => {
  return (
    <div>
      <h1>Your guess was... {props.finalGuessName}</h1>
      <h2>
        The result of your guess being correct was...{" "}
        {props.guessCorrectness.toString()}
      </h2>
    </div>
  );
};

export default GuessResult;

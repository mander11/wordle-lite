const GuessResult = (props) => {
  const blankText = '';
  const resultText = props.guessCorrectness ? 'Nice!' : 'Oh... roasted...  Try again if you dare!';
  return (
    <div>
      {props.guessSubmitted ? 
        <h3>{resultText}</h3> :
        <h3>{blankText}</h3>
      }
    </div>
  );
};

export default GuessResult;

import { useEffect, useState } from "react";

export default function useGuessChecker(finalGuess) {
  const [letterResults, setLetterResults] = useState([]);
  const [guessSubmitted, setGuessSubmitted] = useState(false);

  useEffect(() => {
    if (!finalGuess) {
      setGuessSubmitted(false);
    } else {
      checkFinalGuess();
    }

    async function checkFinalGuess() {
      const res = await fetch(`http://localhost:3001/api/guess/v2/`, {
        method: "POST",
        body: JSON.stringify({ guessName: finalGuess }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await res.json();
      setLetterResults(json);
      setGuessSubmitted(true);
    }
  }, [finalGuess]);

  return [letterResults, guessSubmitted];
}

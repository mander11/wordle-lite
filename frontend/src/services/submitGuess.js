const WORDLE_BACKEND_SERVER = "http://localhost:3001";

export const submitGuess = async (guessName) => {
  return fetch(`${WORDLE_BACKEND_SERVER}/api/guess/v2/`, {
    method: "POST",
    body: JSON.stringify({ guessName }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

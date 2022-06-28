/**
 * @jest-environment jsdom
 */

import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import HomePage from "../HomePage.js";
import useGuessChecker from "../useGuessChecker.js";

test("correct guess", async () => {
  // Given we boot-up the app
  // And a wordle guess of ... returns ...
  // When a user guesses wrong
  // Then they will see ...

  fetch.mockResponseOnce(JSON.stringify({ isGuessCorrect: true }));

  const app = render(<HomePage />);

  const before = await app.findByTestId("one");

  const { result, waitForNextUpdate } = renderHook(() =>
    useGuessChecker("foobar")
  );

  await waitForNextUpdate();

  const after = await app.findByTestId("one");

  expect(1).toBe(2);
});

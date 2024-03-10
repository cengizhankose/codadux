"use client";
import React, { useState } from "react";

import { useCompletion } from "ai/react";
import { useIsLoggedIn, useUserWallets } from "@dynamic-labs/sdk-react-core";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function ChallengePage() {
  const [answer, setAnswer] = useState("");

  const userWallets = useUserWallets();
  const isUserLoggedIn = useIsLoggedIn();
  const router = useRouter();
  const { completion, input, complete, error } = useCompletion();

  if (!isUserLoggedIn) {
    alert("You need to connect your wallet to participate in this challenge");
    router.push("/challenges");
  }

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleAiHint = () => {
    const input =
      "give me a riddle about programming language python it is not supposed have the word python in it this is going to be a hint";
    complete(input);
  };

  const winner = (winnerAddress, prizeAmount) => {
    alert("You are correct!");
    fetch("/api/winner-winner-chicken-dinner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        winnerAddress,
        prizeAmount,
      }),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (answer.toLowerCase() === "python") {
      // Call your function here if the answer is correct
      // replace `yourFunctionName` with the actual name of your function
      winner(userWallets[0].address, 0.5);
    }
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-gray-400 rounded-lg shadow-md"
      >
        <label className="block mb-6">
          <span className="text-gray-700">
            What programming language is known for its simplicity and
            readability?
          </span>
          <input
            type="text"
            value={answer}
            onChange={handleAnswerChange}
            className="block w-full mt-1 rounded-md shadow-sm focus:ring focus:ring-opacity-50 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200"
          />
        </label>
        <Button
          type="submit"
          className="px-4 mr-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Submit
        </Button>
        <Button
          type="button"
          onClick={handleAiHint}
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          AI hint
        </Button>
        <div className="text-green-800 max-w-96">
          {error && (
            <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
              {error.message}
            </div>
          )}
          {completion}
        </div>
      </form>
    </div>
  );
}

export default ChallengePage;

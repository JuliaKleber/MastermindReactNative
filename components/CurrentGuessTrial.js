// Represents the currentTrial.
// The user can place colors in the fields.
// By clicking the 'submit' button, the attempted solution is checked
// and an appropriate message is displayed.

import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
import InputFields from "./InputFields";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";
import OutputSolutionFound from "./OutputSolutionFound";
import OutputOutOfTurns from "./OutputOutOfTurns";
import QuestionPlayAgain from "./QuestionPlayAgain";

const CurrentGuessTrial = ({
  currentColor,
  numberTrials,
  numberTrial,
  currentTrial,
  setCurrentTrial,
  solution,
  userGuesses,
  setUserGuesses,
  qualityOfGuesses,
  setQualityOfGuesses,
  numberInputFields,
  onResetGame,
}) => {

  const isLastTrial = currentTrial === numberTrials - 1;
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [endOfGame, setEndOfGame] = useState(false);

  const handleProposalCheck = () => {
    // If two colors occur both in the solution and in the solution proposal
    // in the same place, they are removed from the two arrays.
    const reducedSolution = solution.filter(
      (color, i) => color !== userGuesses[currentTrial][i]
    );
    const reducedGuess = userGuesses[currentTrial].filter(
      (color, i) => color !== solution[i]
    );
    const correctGuesses = solution.length - reducedSolution.length;
    // Evaluates how many colors are in both solutions,
    // but are in different places.
    let wrongPlaceGuesses = 0;
    for (let i = reducedSolution.length - 1; i >= 0; i--) {
      for (let j = reducedSolution.length - 1; j >= 0; j--) {
        if (reducedSolution[i] === reducedGuess[j]) {
          wrongPlaceGuesses += 1;
          reducedSolution.splice(i, 1);
          reducedGuess.splice(j, 1);
        }
      }
    }
    setQualityOfGuesses([...qualityOfGuesses, [correctGuesses, wrongPlaceGuesses]]);
    // Either the end of the game is triggered
    // or CurrentTrial is increased by one.
    setHasWon(correctGuesses === numberInputFields);
    setHasLost(correctGuesses !== numberInputFields && isLastTrial);
    correctGuesses === numberInputFields || isLastTrial
      ? setEndOfGame(true)
      : setCurrentTrial(currentTrial => currentTrial + 1);
  };

  const resetGame = () => {
    setEndOfGame(false);
    setHasWon(false);
    setHasLost(false);
    onResetGame();
  }

  const output = () => {
    if (hasLost) {
      return (
        <>
          <OutputHowGoodWasYourProposal
            numberTrial={numberTrial}
            currentTrial={currentTrial}
            qualityOfGuesses={qualityOfGuesses}
          />
          <OutputOutOfTurns solution={solution} />
        </>
      )
    }
    if (hasWon) {
      return <OutputSolutionFound />
    }
    return null;
  }

  const button = () => {
    if (!endOfGame) {
      return (
        <TouchableOpacity onPress={handleProposalCheck} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>absenden</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <QuestionPlayAgain onResetGame={() => resetGame()} />
      )
    }
  }

  return (
    <View style={[globalStyles.card, globalStyles.container]}>
      <Text style={globalStyles.title}>{numberTrial + 1}. Versuch</Text>
      <InputFields
        currentTrial={currentTrial}
        numberTrial={numberTrial}
        currentColor={currentColor}
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
      />
      {output()}
      {button()}
    </View>
  );
};

const styles = StyleSheet.create ({
  smallCard: {
    width: '40%',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
  },
  smallTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CurrentGuessTrial;

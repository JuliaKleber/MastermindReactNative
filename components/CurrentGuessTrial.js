// Repräsentiert den numberTrial-ten Versuch.
// Der Nutzer kann vier Farben in die Kästchen platzieren.
// Durch Klicken des "absenden" Buttons wird der
// Lösungsversuch überprüft und eine entsprechende Nachricht ausgegeben.

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import InputFields from "./InputFields";
import CheckProposedSolutionButton from "./CheckProposedSolutionButton";
import Output from "./Output";
import QuestionPlayAgain from "./QuestionPlayAgain";
import { globalStyles } from "../styles";

const CurrentGuessTrial = ({
  currentColor,
  numberTrials,
  numberTrial,
  currentTrial,
  setCurrentTrial,
  solution,
  userGuesses,
  setUserGuesses,
  numberInputFields,
  onResetGameAppComponent,
  isResetGame,
  setIsResetGame,
}) => {
  const [proposalSent, setProposalSent] = useState(false);
  const [endOfGame, setEndOfGame] = useState(false);

  useEffect(() => {
    if (isResetGame) {
      setUserGuesses(Array(numberTrials).fill(Array(numberInputFields).fill("white")));
      setProposalSent(false);
      setEndOfGame(false);
      if (numberTrial === numberTrials) {
        setIsResetGame(false);
      }
    }
  }, [isResetGame]);

  return (
    <View style={[globalStyles.card, numberTrial < currentTrial && styles.smallCard]}>
      <Text style={numberTrial === currentTrial ? globalStyles.title : styles.smallTitle}>{numberTrial}. Versuch</Text>
      <InputFields
        currentTrial={currentTrial}
        numberTrial={numberTrial}
        currentColor={currentColor}
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
      />
      <CheckProposedSolutionButton
        solution={solution}
        userGuesses={userGuesses}
        numberInputFields={numberInputFields}
        currentTrial={currentTrial}
        setCurrentTrial={setCurrentTrial}
        numberTrials={numberTrials}
        setNumberInRightPlace={setNumberInRightPlace}
        setNumberInWrongPlace={setNumberInWrongPlace}
        proposalSent={proposalSent}
        setProposalSent={setProposalSent}
        setEndOfGame={setEndOfGame}
      />
      {proposalSent && (
        <Output
          numberInRightPlace={numberInRightPlace}
          numberInWrongPlace={numberInWrongPlace}
          numberInputFields={numberInputFields}
          currentTrial={currentTrial}
          numberTrials={numberTrials}
        />
      )}
      {endOfGame && (
        <QuestionPlayAgain onResetGameAppComponent={onResetGameAppComponent} />
      )}
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

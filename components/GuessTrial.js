// Repräsentiert den numberTrial-ten Versuch.
// Der Nutzer kann vier Farben in die Kästchen platzieren.
// Durch Klicken des "absenden" Buttons wird der
// Lösungsversuch überprüft und eine entsprechende Nachricht ausgegeben.

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorPicker from "./ColorPicker";
import InputFields from "./InputFields";
import CheckProposedSolutionButton from "./CheckProposedSolutionButton";
import Output from "./Output";
import QuestionPlayAgain from "./QuestionPlayAgain";
import { globalStyles } from "../styles";

const GuessTrial = ({
  currentColor,
  numberTrials,
  numberTrial,
  currentTrial,
  setCurrentTrial,
  solution,
  numberInputFields,
  onResetGameAppComponent,
  isResetGame,
  setIsResetGame,
}) => {
  const [chosenColors, setChosenColors] = useState(
    Array(numberInputFields).fill("white")
  );
  const [proposalSent, setProposalSent] = useState(false);
  const [numberInRightPlace, setNumberInRightPlace] = useState(0);
  const [numberInWrongPlace, setNumberInWrongPlace] = useState(0);
  const [endOfGame, setEndOfGame] = useState(false);

  // Wenn sich der aktuelle Versuch ändert,
  // werden alle Versuche bis zum aktuellen Versuch angezeigt.
  // const isShown = numberTrial <= currentTrial;

  useEffect(() => {
    if (isResetGame) {
      setChosenColors(Array(numberInputFields).fill("white"));
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
        chosenColors={chosenColors}
        setChosenColors={setChosenColors}
      />
      <CheckProposedSolutionButton
        solution={solution}
        chosenColors={chosenColors}
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
          numberTrial={numberTrial}
          numberTrials={numberTrials}
          solution={solution}
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

export default GuessTrial;

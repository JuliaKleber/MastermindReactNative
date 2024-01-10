// Repräsentiert den numberTrial-ten Versuch.
// Es wird angezeigt, wie viele Farben an der richtigen Stelle und wie viele
// Farben an der falschen Stelle sind.

import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles";
import InputFields from "./InputFields";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";

const OldGuessTrial = ({
  currentColor,
  numberTrials,
  numberTrial,
  currentTrial,
  userGuesses,
  qualityOfGuesses,
  setUserGuesses,
  numberInputFields,
  isResetGame,
  setIsResetGame,
}) => {

  useEffect(() => {
    if (isResetGame) {
      setUserGuesses(
        Array(numberTrials).fill(Array(numberInputFields).fill("white"))
      );
      setProposalSent(false);
      setEndOfGame(false);
      if (numberTrial === numberTrials) {
        setIsResetGame(false);
      }
    }
  }, [isResetGame]);

  return (
    <View
      style={[
        globalStyles.card,
        numberTrial < currentTrial && styles.smallCard,
      ]}
    >
      <Text
        style={
          numberTrial === currentTrial ? globalStyles.title : styles.smallTitle
        }
      >
        {numberTrial}. Versuch
      </Text>
      <InputFields
        currentTrial={currentTrial}
        numberTrial={numberTrial}
        currentColor={currentColor}
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
      />
      <OutputHowGoodWasYourProposal
        qualityOfGuesses={qualityOfGuesses}
        numberTrial={numberTrial}
        currentTrial={currentTrial}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  smallCard: {
    width: "40%",
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

export default OldGuessTrial;

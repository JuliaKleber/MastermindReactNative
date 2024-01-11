// Represents the numberTrial-th trial.
// The user guesses are shown as four colored boxes.
// There is also an output message that tells the user how good the guess was.

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles";
import InputFields from "./InputFields";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";

const OldGuessTrial = ({
  numberTrial,
  currentTrial,
  userGuesses,
  qualityOfGuesses,
}) => {

  return (
    <View style={[globalStyles.card, styles.smallCard]}>
      <Text style={globalStyles.title}>
        {numberTrial + 1}. Versuch
      </Text>
      <InputFields
        numberTrial={numberTrial}
        currentTrial={currentTrial}
        userGuesses={userGuesses}
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
});

export default OldGuessTrial;

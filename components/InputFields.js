// Represents the input fields of the numberTrial-th trial.

import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";

const InputFields = ({
  currentTrial,
  numberTrial,
  currentColor,
  userGuesses,
  setUserGuesses,
}) => {
  
  // If a field is clicked and the field belongs to the current trial,
  // the currentColor is set to the field and saved to the userGuesses.
  const setColor = (index) => {
    if (currentTrial === numberTrial) {
      const chosenColors = [...userGuesses[currentTrial]];
      chosenColors[index] = currentColor;
      let newUserGuesses = [...userGuesses];
      newUserGuesses[currentTrial] = chosenColors;
      setUserGuesses(newUserGuesses);
    }
  };

  return (
    <View style={[globalStyles.containerVertical, styles.margins]}>
      {userGuesses[numberTrial].map((color, index) => (
        <TouchableOpacity
          style={[globalStyles.coloredField, { backgroundColor: color }, styles.fieldSize]}
          key={index}
          onPress={() => setColor(index)}
        >
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  fieldSize: {
    aspectRatio: 1,
    width: "25%",
  },

  margins: {
    marginTop: 20,
    marginBottom: 20,
  },
});

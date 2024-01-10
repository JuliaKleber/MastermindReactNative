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
  // Wenn eine Kachel des Versuchs angeklickt wird,
  // wird die currentColor im Array chosenColors
  // unter dem entsprechendem Index gespeichert.
  const setColor = (index) => {
    if (currentTrial === numberTrial) {
      const chosenColors = [...userGuesses[currentTrial - 1]];
      chosenColors[index] = currentColor;
      newUserGuesses = [...userGuesses];
      newUserGuesses[currentTrial - 1] = chosenColors;
      setUserGuesses(newUserGuesses);
    }
  };

  return (
    <View style={[globalStyles.containerVertical, styles.margins]}>
      {userGuesses[numberTrial - 1].map((color, index) => (
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

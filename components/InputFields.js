import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";

const InputFields = ({
  currentTrial,
  numberTrial,
  currentColor,
  chosenColors,
  setChosenColors,
}) => {
  // Wenn eine Kachel des Versuchs angeklickt wird,
  // wird die currentColor im Array chosenColors
  // unter dem entsprechendem Index gespeichert.
  const setColor = (index) => {
    if (currentTrial === numberTrial) {
      const newChosenColors = [...chosenColors];
      newChosenColors[index] = currentColor;
      setChosenColors(newChosenColors);
    }
  };

  return (
    <View style={[globalStyles.containerVertical, styles.margins]}>
      {chosenColors.map((color, index) => (
        <TouchableOpacity
          style={[globalStyles.coloredField, styles.fieldSize, { backgroundColor: color }]}
          key={index}
          onPress={() => setColor(index)}
        >
          <Text></Text>
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

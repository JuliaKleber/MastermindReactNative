// Representents the tiles with the colors,
// which can be selected by the player by pressing

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

const ColorPicker = ({ colors, numberColors, setCurrentColor, isResetGame }) => {
  const [areButtonsSelected, setAreButtonsSelected] = useState(
    Array(numberColors).fill(false)
  );

  useEffect(() => {
    if (isResetGame) {
      setAreButtonsSelected(Array(numberColors).fill(false));
    }
  }, [isResetGame]);

  const handleColorSelection = (index) => {
    const newButtonStates = Array(numberColors).fill(false);
    newButtonStates[index] = true;
    setAreButtonsSelected(newButtonStates);
    setCurrentColor(colors[index]);
  };

  return (
    <View style={[globalStyles.card, globalStyles.containerVertical]}>
      {colors.map((fieldColor, index) => (
        <TouchableOpacity
          key={index}
          style={[
            globalStyles.coloredField,
            styles.fieldSize,
            areButtonsSelected[index] && styles.colorSelected,
            {backgroundColor: fieldColor}
          ]}
          onPress={() => handleColorSelection(index)}
        >
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create ({
  fieldSize: {
    aspectRatio: 1,
    width: '16.6%',
  },

  colorSelected: {
    borderWidth: 2,
  },
});

export default ColorPicker;

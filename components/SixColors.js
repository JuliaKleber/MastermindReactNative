// Representents the tiles with the colors,
// which can be selected by the player by pressing

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

const SixColors = ({ colors, numberColors, setCurrentColor, isResetGame }) => {
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
          ]}
          onPress={() => handleColorSelection(index)}
        >
          <Text style={{backgroundColor: fieldColor}}></Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create ({
  fieldSize: {
    aspectRation: 1,
    width: '33%',
  },

  colorSelected: {
    borderWidth: 2,
  },
});

export default SixColors;

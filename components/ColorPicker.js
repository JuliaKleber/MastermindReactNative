// Representents the tiles with the colors,
// which can be selected by the player by pressing

import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

const ColorPicker = ({ colors, colorsCount, setCurrentColor }) => {
  const [selectedButtons, setSelectedButtons] = useState(
    Array(colorsCount).fill(false)
  );

  const handleColorSelection = (index) => {
    let newButtonStates = [];
    if (selectedButtons[index] === true) {
      newButtonStates = Array(colorsCount).fill(false);
      setCurrentColor("white");
    } else {
      newButtonStates = Array(colorsCount).fill(false);
      newButtonStates[index] = true;
      setCurrentColor(colors[index]);
    }
    setSelectedButtons(newButtonStates);
  };

  return (
    <View style={[globalStyles.card, globalStyles.containerVertical]}>
      {colors.map((fieldColor, index) => (
        <TouchableOpacity
          key={index}
          style={[
            globalStyles.coloredField,
            styles.fieldSize,
            selectedButtons[index] && styles.colorSelected,
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

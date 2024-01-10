import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles";

const OutputOutOfTurns = ({ solution }) => {

  const toGermanColors = (solution) => {
    const colorMap = {
      yellow: "gelb",
      orange: "orange",
      red: "rot",
      mediumorchid: "lila",
      royalblue: "blau",
      limegreen: "grün",
      white: "weiß",
    };
    return solution.map((color) => colorMap[color] || "andere Farbe").join(", ");
  };

  return (
    <View style={globalStyles.marginTop}>
      <Text style={[globalStyles.textSize, globalStyles.centeredText]}>
        Die richtige Lösung ist <Text style={globalStyles.bold}>{toGermanColors(solution)}</Text>
      </Text>
    </View>
  );
};

export default OutputOutOfTurns;

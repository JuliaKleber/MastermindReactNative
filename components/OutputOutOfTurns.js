import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles";

const OutputOutOfTurns = ({ colorsSolution }) => {
  return (
    <View>
      <Text style={[globalStyles.textSize, globalStyles.centeredText]}>
        Die richtige Lösung ist <Text style={globalStyles.bold}>{colorsSolution}</Text>
      </Text>
    </View>
  );
};

export default OutputOutOfTurns;

import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles";

const OutputSolutionFound = () => {
  return (
    <View>
      <Text style={[globalStyles.bold, globalStyles.centeredText, globalStyles.textSize]}>
        Herzlichen Glückwunsch!
      </Text>
      <Text style={[globalStyles.centeredText, globalStyles.textSize]}>
        Du hast die richtige Lösung gefunden.
      </Text>
    </View>
  );
};

export default OutputSolutionFound;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";

const QuestionPlayAgain = ({ onResetGame }) => {

  return (
    <View style={[globalStyles.container, globalStyles.marginTop]}>
      <Text style={globalStyles.textSize}>Möchtest du noch mal spielen?</Text>
      <TouchableOpacity onPress={onResetGame} style={[globalStyles.button, globalStyles.marginTop]}>
        <Text style={globalStyles.buttonText}>Ja</Text>
      </TouchableOpacity>
    </View>
  );
}

export default QuestionPlayAgain;

import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles";

const QuestionPlayAgain = ({ onResetGameAppComponent }) => {
  const handleResetGame = () => {
    onResetGameAppComponent();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textSize}>Möchtest du noch mal spielen?</Text>
      <Button onPress={handleResetGame} title="Ja" />
    </View>
  );
}

export default QuestionPlayAgain;

import React, { useState } from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import CurrentGuessTrial from "./components/CurrentGuessTrial";
import OldGuessTrial from "./components/OldGuessTrial";
import ColorPicker from "./components/ColorPicker";
import Instruction from "./components/Instruction";
import { globalStyles } from "./styles";

// Die vom Spiel erlaubten Farben
const colors = [
  "yellow",
  "orange",
  "red",
  "mediumorchid",
  "royalblue",
  "limegreen",
];
// Die Anzahl der erlaubten Farben
const numberColors = colors.length;
// Die Anzahl der erlaubten Versuche
const numberTrials = 8;
// Die Anzahl der zu erratenden Farben
const numberInputFields = 4;

// Per Zufall werden die Farben gesetzt,
// die vom Benutzer zu erraten sind.
const setColorsSolution = () => {
  let newSolution = [];
  for (let i = 0; i < numberInputFields; i++) {
    let dice = Math.floor(Math.random() * numberColors);
    newSolution.push(colors[dice]);
  }
  return newSolution;
};

const App = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const [currentTrial, setCurrentTrial] = useState(0);
  const [isResetGame, setIsResetGame] = useState(false);
  const [solution, setSolution] = useState(() => setColorsSolution());
  const [userGuesses, setUserGuesses] = useState(Array(numberTrials).fill(Array(numberInputFields).fill("white")));
  const [qualityOfGuesses, setQualityOfGuesses] = useState(Array(numberTrials).fill(Array(2).fill(0)));

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  const handleResetGame = () => {
    setSolution(setColorsSolution());
    setCurrentTrial(1);
    setIsResetGame(true);
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <ColorPicker
          colors={colors}
          numberColors={colors.length}
          setCurrentColor={setCurrentColor}
          isResetGame={isResetGame}
        />
        <CurrentGuessTrial
          colors={colors}
          currentColor={currentColor}
          numberTrials={numberTrials}
          numberTrial={currentTrial}
          currentTrial={currentTrial}
          setCurrentTrial={setCurrentTrial}
          solution={solution}
          userGuesses={userGuesses}
          setUserGuesses={setUserGuesses}
          numberInputFields={numberInputFields}
          onResetGameAppComponent={handleResetGame}
          isResetGame={isResetGame}
          setIsResetGame={setIsResetGame}
        />
        <View style={styles.containerReverseRow}>
          {Array(currentTrial)
            .fill()
            .map((_, index) => (
              <OldGuessTrial
                key={`trial${index}`}
                currentColor={currentColor}
                numberTrials={numberTrials}
                numberTrial={index}
                currentTrial={currentTrial}
                userGuesses={userGuesses}
                qualityOfGuesses={qualityOfGuesses}
                numberInputFields={numberInputFields}
                isResetGame={isResetGame}
                setIsResetGame={setIsResetGame}
              />
            ))}
        </View>
        <Instruction
          numberTrials={numberTrials}
          numberInputFields={numberInputFields}
          numberColors={numberColors}
        />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  containerReverseRow: {
    flexDirection: "row",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
  },
});

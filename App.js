import React, { useState } from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import GuessTrial from "./components/GuessTrial";
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
  const [currentTrial, setCurrentTrial] = useState(1);
  const [isResetGame, setIsResetGame] = useState(false);
  const [solution, setSolution] = useState(() => setColorsSolution());

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
        <View style={styles.containerReverseRow}>
          {Array(currentTrial)
            .fill()
            .map((_, index) => (
              <GuessTrial
                key={`trial${index + 1}`}
                colors={colors}
                currentColor={currentColor}
                numberTrials={numberTrials}
                numberTrial={index + 1}
                currentTrial={currentTrial}
                setCurrentTrial={setCurrentTrial}
                solution={solution}
                numberInputFields={numberInputFields}
                onResetGameAppComponent={handleResetGame}
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
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

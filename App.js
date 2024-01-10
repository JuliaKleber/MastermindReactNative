import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "./styles";
import ColorPicker from "./components/ColorPicker";
import CurrentGuessTrial from "./components/CurrentGuessTrial";
import OldGuessTrial from "./components/OldGuessTrial";
import Instruction from "./components/Instruction";

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
const colorsCount = colors.length;
// Die Anzahl der erlaubten Versuche
const numberTrials = 8;
// Die Anzahl der zu erratenden Farben
const numberInputFields = 4;

// Per Zufall werden die Farben gesetzt,
// die vom Benutzer zu erraten sind.
const setColorsSolution = () => {
  let newSolution = [];
  for (let i = 0; i < numberInputFields; i++) {
    let dice = Math.floor(Math.random() * colorsCount);
    newSolution.push(colors[dice]);
  }
  return newSolution;
};

const App = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const [currentTrial, setCurrentTrial] = useState(0);
  const [solution, setSolution] = useState(() => setColorsSolution());
  const [userGuesses, setUserGuesses] = useState(() =>
    Array.from({ length: numberTrials }, () => Array(numberInputFields).fill("white"))
  );
  const [qualityOfGuesses, setQualityOfGuesses] = useState([]);

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  const handleResetGame = () => {
    setSolution(setColorsSolution());
    setCurrentTrial(0);
    setUserGuesses(() => Array.from({ length: numberTrials }, () => Array(numberInputFields).fill("white")));
    setQualityOfGuesses([]);
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <ColorPicker
          colors={colors}
          colorsCount={colors.length}
          setCurrentColor={setCurrentColor}
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
          qualityOfGuesses={qualityOfGuesses}
          setQualityOfGuesses={setQualityOfGuesses}
          numberInputFields={numberInputFields}
          onResetGame={handleResetGame}
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
              />
            ))}
        </View>
        <Instruction
          numberTrials={numberTrials}
          numberInputFields={numberInputFields}
          colorsCount={colorsCount}
        />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  containerReverseRow: {
    flexDirection: "row-reverse",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
  },
});

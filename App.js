// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ColorPicker from "./components/ColorPicker";
import GuessTrial from "./components/GuessTrial";
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
          numberColors={numberColors}
          setCurrentColor={setCurrentColor}
          isResetGame={isResetGame}
        />
        <View style={styles.trials}>
          {Array(numberTrials)
            .fill()
            .map((_, index) => (
              <Trial
                key={`trial${index + 1}`}
                numberTrials={numberTrials}
                numberTrial={index + 1}
                currentTrial={currentTrial}
                setCurrentTrial={setCurrentTrial}
                solution={solution}
                currentColor={currentColor}
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
  home: {
    // display: flex,
    // flexDirection: column,
    // alignItems: center,
    // backgroundColor: "white",
    // // fontFamily: "arial",
    // fontSize: 18,
    // marginTop: 0,
  },

  trials: {
    flexDirection: 'column-reverse',
  },
});

// h3: {
//   textAlign: center,
// },

// button: {
//   border: 0,
//   borderRadius: 30,
//   backgroundColor: #4f30da,
//   color: white,
//   width: 130,
//   height: 40,
//   fontSize: 18,
//   textAlign: center,
// },

// button:hover: {
//   backgroundColor: rgb(40, 40, 190),
// },

// b: {
//   color: rgb(105, 1, 105),
// },

// container: {
//   display: flex,
//   flexDirection: column,
//   alignItems: center,
// },

// box: {
//   padding: 0 10,
//   marginTop: 20,
//   marginBottom: 20,
//   width: 300,
//   textAlign: justify,
//   borderRadius: 10,
//   boxShadow: 0 0 16 rgba(0, 0, 0, 0.1),
// },

// centered-text: {
//   textAlign: center,
// },

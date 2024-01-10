// Nachdem der Nutzer den absenden-Button geklickt hat,
// wird der Output generiert der besagt wie gut der Lösungsversuch war.

import React from "react";
import { View } from "react-native";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";
import OutputSolutionFound from "./OutputSolutionFound";
import OutputOutOfTurns from "./OutputOutOfTurns";

const Output = ({
  qualityOfGuesses,
  numberInputFields,
  currentTrial,
  numberTrial,
  numberTrials,
  solution,
}) => {
  const output = () => {
    // Falls alle vier Farben richtig sind, wird eine entsprechende
    // Meldung ausgegeben und das Ende des Spiels ausgelöst.
    if (numberInRightPlace === numberInputFields) {
      return <OutputSolutionFound />;
    }
    // Falls es sich um den 8. Versuch handelt,
    // wird das Ende des Spiels ausgelöst.
    else if (
      numberTrial === numberTrials &&
      numberInRightPlace !== numberInputFields
    ) {
      const solutionGerman = toGermanColors(solution);
      return (
        <View>
          <OutputHowGoodWasYourProposal
            numberInRightPlace={numberInRightPlace}
            numberInWrongPlace={numberInWrongPlace}
            numberTrial={numberTrial}
            currentTrial={currentTrial}
          />
          <OutputOutOfTurns colorsSolution={solutionGerman} />
        </View>
      );
    }
    // Ansonsten wird die Anzahl der richtig platzierten Farben
    // und der falsch platzierten Farben ausgegeben.
    else {
      return (
        <OutputHowGoodWasYourProposal
          numberInRightPlace={numberInRightPlace}
          numberInWrongPlace={numberInWrongPlace}
          numberTrial={numberTrial}
          currentTrial={currentTrial}
        />
      );
    }
  };

  // Wandelt die englischen Bezeichnungen
  // der Farben in deutsche Bezeichnungen um.
  const toGermanColors = (colors) => {
    const colorMap = {
      yellow: "gelb",
      orange: "orange",
      red: "rot",
      mediumorchid: "lila",
      royalblue: "blau",
      limegreen: "grün",
    };
    return colors.map((color) => colorMap[color] || "andere Farbe").join(", ");
  };

  return output();
};

export default Output;

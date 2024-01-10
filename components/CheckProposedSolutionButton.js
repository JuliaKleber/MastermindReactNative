// Durch Klicken des "absenden"-Buttons wird der Lösungsversuch überprüft.

import React from "react";
import { View, Button } from "react-native";

const CheckProposedSolutionButton = ({
  solution,
  userGuesses,
  numberInputFields,
  currentTrial,
  setCurrentTrial,
  numberTrials,
  setNumberInRightPlace,
  setNumberInWrongPlace,
  proposalSent,
  setProposalSent,
  setEndOfGame,
}) => {
  const handleProposalCheck = () => {
    // Wenn zwei Farben sowohl in der Lösung als auch in dem Lösungsvorschlag
    // an der gleichen Stelle vorkommen, werden Sie aus den beiden Arrays entfernt.
    const reducedSolution = solution.filter(
      (color, i) => color !== userGuesses[currentTrial - 1][i]
    );
    const reducedProposal = userGuesses[currentTrial - 1].filter(
      (color, i) => color !== solution[i]
    );
    const numberInRightPlace = solution.length - reducedSolution.length;
    // Prüft in der for-Schleife wie viele Farben zwar in beiden Lösungen vorkommen,
    // aber sich an unterschiedlichen Stellen befinden.
    let numberInWrongPlace = 0;
    for (let i = reducedSolution.length - 1; i >= 0; i--) {
      for (let j = reducedSolution.length - 1; j >= 0; j--) {
        if (reducedSolution[i] === reducedProposal[j]) {
          numberInWrongPlace += 1;
          reducedSolution.splice(i, 1);
          reducedProposal.splice(j, 1);
        }
      }
    }
    setNumberInRightPlace(numberInRightPlace);
    setNumberInWrongPlace(numberInWrongPlace);
    // Wird benötigt um den sendButton auszublenden.
    setProposalSent(true);
    // Entweder wird das Ende des Spiels ausgelöst
    // oder es wird zum nächsten Versuch übergegangen.
    numberInRightPlace === numberInputFields || currentTrial === numberTrials
      ? setEndOfGame(true)
      : setCurrentTrial(currentTrial + 1);
  };

  return (
    <View>
      {!proposalSent && (
        <Button
          onPress={handleProposalCheck}
          title="absenden"
        />
      )}
    </View>
  );
};

export default CheckProposedSolutionButton;

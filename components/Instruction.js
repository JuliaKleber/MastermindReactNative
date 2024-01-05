// Eine Anleitung zum Spiel wird angezeigt.

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles";

const Instruction = (props) => {
  return (
    <View style={[styles.instruction, globalStyles.card]}>
      <Text style={[globalStyles.title, globalStyles.textSize]}>Spielanleitung für Mastermind</Text>
      <Text style={[styles.block, globalStyles.textSize]}>
        Der Computer wählt zufällig {props.numberInputFields} Farben aus. Ziel
        ist es, diese Farben zu erraten. Farben können mehrfach in der Lösung
        vorkommen.
      </Text>
      <Text style={[styles.block, globalStyles.textSize]}>
        Zum Setzen der Farben wähle eines der {props.numberColors} Farbfelder
        an. Dann kannst du die weißen Quadrate der Versuche einfärben, indem du
        sie auswählst.
      </Text>
      <Text style={[styles.block, globalStyles.textSize]}>
        Du hast insgesamt {props.numberTrials} Versuche um die Lösung zu finden.
      </Text>
    </View>
  );
};

export default Instruction;

const styles = StyleSheet.create({
  block: {
    textAlign: "justify",
    paddingTop: 16,
  }
});

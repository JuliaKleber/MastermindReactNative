import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

const OutputHowGoodWasYourProposal = ({
  qualityOfGuesses,
  currentTrial,
  numberTrial,
}) => {
  const colorInRightPlace = qualityOfGuesses[numberTrial][0] === 1 ? "Farbe" : "Farben";
  const colorInWrongPlace = qualityOfGuesses[numberTrial][1] === 1 ? "Farbe" : "Farben";
  const verbInRightPlace = qualityOfGuesses[numberTrial][0] === 1 ? "ist" : "sind";
  const verbInWrongPlace = qualityOfGuesses[numberTrial][1] === 1 ? "ist" : "sind";

  return (
    <View>
      {currentTrial === numberTrial && (
        <View>
          <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
            <Text style={[globalStyles.bold, globalStyles.textSize]}>
              {qualityOfGuesses[numberTrial][0]}{' '}
            </Text>
            <Text style={globalStyles.textSize}>
              {colorInRightPlace} {verbInRightPlace}{' '}
            </Text>
            <Text style={[globalStyles.bold, globalStyles.textSize]}>
              richtig{' '}
            </Text>
            <Text style={globalStyles.textSize}>
              platziert und
            </Text>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
            <Text style={[globalStyles.bold, globalStyles.textSize]}>
              {qualityOfGuesses[numberTrial][1]}{' '}
            </Text>
            <Text style={globalStyles.textSize}>
              {colorInWrongPlace} {verbInWrongPlace} an der{' '}
            </Text>
            <Text style={[globalStyles.bold, globalStyles.textSize]}>
              falschen{' '}
            </Text>
            <Text style={globalStyles.textSize}>
              Stelle
            </Text>
          </View>
        </View>
      )}

      {currentTrial > numberTrial && (
        <View>
          <View style={globalStyles.containerVertical}>
            <Text style={[globalStyles.bold, styles.smallText]}>
              {qualityOfGuesses[numberTrial][0]}{' '}
            </Text>
            <Text style={styles.smallText}>
              richtige Stelle
            </Text>
          </View>
          <View style={globalStyles.containerVertical}>
            <Text style={[globalStyles.bold, styles.smallText]}>
              {qualityOfGuesses[numberTrial][1]}{' '}
            </Text>
            <Text style={styles.smallText}>
              falsche Stelle
            </Text>
          </View>
        </View>
      )}
    </View>
  );

};

export default OutputHowGoodWasYourProposal;

const styles = StyleSheet.create({
  smallText: {
    fontSize: 10,
  }
});

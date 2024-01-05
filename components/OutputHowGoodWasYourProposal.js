import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

const OutputHowGoodWasYourProposal = ({
  numberInRightPlace,
  numberInWrongPlace,
  numberTrial,
  currentTrial,
}) => {
  const colorInRightPlace = numberInRightPlace === 1 ? "Farbe" : "Farben";
  const colorInWrongPlace = numberInWrongPlace === 1 ? "Farbe" : "Farben";
  const verbInRightPlace = numberInRightPlace === 1 ? "ist" : "sind";
  const verbInWrongPlace = numberInWrongPlace === 1 ? "ist" : "sind";

  return (
    <View>
      {currentTrial === numberTrial && (
        <View>
          <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
            <Text style={[globalStyles.bold, globalStyles.textSize]}>
              {numberInRightPlace}{' '}
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
              {numberInWrongPlace}{' '}
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
              {numberInRightPlace}{' '}
            </Text>
            <Text style={styles.smallText}>
              richtige Stelle
            </Text>
          </View>
          <View style={globalStyles.containerVertical}>
            <Text style={[globalStyles.bold, styles.smallText]}>
              {numberInWrongPlace}{' '}
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

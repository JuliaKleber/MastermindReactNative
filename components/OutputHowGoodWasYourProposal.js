import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles";

const OutputHowGoodWasYourProposal = ({
  numberInRightPlace,
  numberInWrongPlace,
}) => {
  const colorInRightPlace = numberInRightPlace === 1 ? "Farbe" : "Farben";
  const colorInWrongPlace = numberInWrongPlace === 1 ? "Farbe" : "Farben";
  const verbInRightPlace = numberInRightPlace === 1 ? "ist" : "sind";
  const verbInWrongPlace = numberInWrongPlace === 1 ? "ist" : "sind";

  return (
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
  );

};

export default OutputHowGoodWasYourProposal;

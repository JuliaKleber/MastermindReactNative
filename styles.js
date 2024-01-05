import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

  // button: {
  //   border: 0,
  //   borderRadius: 30,
  //   // backgroundColor: '#4f30da',
  //   // color: 'white',
  //   width: 130,
  //   height: 40,
  //   fontSize: 18,
  //   textAlign: 'center',
  // },

  // b: {
  //   color: rgb(105, 1, 105),
  // },

  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  containerVertical: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  card: {
    width: '90%',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    ...Platform.select({
      android: {
        elevation: 8,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
    }),
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 16,
  },

  coloredField: {
    borderWidth: 1,
    borderColor: 'black',
  },

  textSize: {
    fontSize: 18,
  },

  centeredText: {
    textAlign: 'center',
  },

  bold: {
    fontWeight: 'bold',
    color: 'mediumorchid'
  },
});

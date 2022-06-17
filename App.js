// Exercice 1 Faire un composant contenant un champ de saisie et un bouton.Le bouton devra être centré et rouge.Appeler ce composant sur l’écran d’accueil.

import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomUpdate inputName='Nom de famille' example='Dupont'></CustomUpdate>
      <CustomUpdate inputName='Prénom' example='Jean'></CustomUpdate>
      <CustomUpdate inputName='Ville de naissance' example='Paris'></CustomUpdate>
      <CustomUpdate inputName='Signe astrologique' example='Verseau'></CustomUpdate>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 25,
    textAlign: 'center'
  },
  buttonText: {
    color: 'white'
  }
});

const CustomUpdate = (props) => {

  const { inputName } = props;
  const { example } = props;

  return (
    <View style={{ flex: 1 }}>
      <Text>{inputName}</Text>
      <TextInput placeholder={example} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mettre à jour</Text>
      </TouchableOpacity>
    </View>
  )
}
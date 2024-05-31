import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../style/Styles';

const FarmManagamentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Nowe gospodarstwo')}>
        <Text style={styles.buttonText}>Dodaj nowe gospodarstwo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FarmManagamentScreen;

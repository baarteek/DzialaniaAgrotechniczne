import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../style/Styles';

const AddNewFieldsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Dodaj ręcznie nowe pole</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Importuj pola z pliku</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewFieldsScreen;
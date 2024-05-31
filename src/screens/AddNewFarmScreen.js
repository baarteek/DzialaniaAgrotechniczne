import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from '../style/Styles';

const AddNewFarmScreen = ({ navigation }) => {
  const [farmName, setFarmName] = useState('');

  const handleAddFarm = () => {
    console.log(`Dodano nowe gospodarstwo: ${farmName}`);
    setFarmName('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.label}>Podaj nazwę gospodarstwa</Text>
          <TextInput
            style={styles.input}
            value={farmName}
            onChangeText={setFarmName}
            placeholder="Nazwa gospodarstwa"
          />
          <TouchableOpacity style={styles.button} onPress={handleAddFarm}>
            <Text style={styles.buttonText}>Dodaj nowe gospodarstwo</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AddNewFarmScreen;

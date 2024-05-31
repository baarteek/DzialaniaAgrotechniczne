import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FarmManagamentScreen from '../screens/FarmManagamentScreen';
import AddNewFarmScreen from '../screens/AddNewFarmScreen';

const Stack = createStackNavigator();

const FarmManagamentStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Zarządzaj Gospodarstwami">
      <Stack.Screen
        name="Zarządzaj Gospodarstwami"
        component={FarmManagamentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Nowe gospodarstwo"
        component={AddNewFarmScreen}
        options={{ headerShown: true, title: 'Nowe gospodarstwo' }} // headerShown domyślnie true, ale dla przejrzystości
      />
    </Stack.Navigator>
  );
};

export default FarmManagamentStackNavigator;

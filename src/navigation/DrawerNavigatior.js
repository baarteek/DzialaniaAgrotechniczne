import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FieldManagementScreen from '../screens/FieldManagementScreen';
import AddNewFieldsScreen from '../screens/AddNewFieldsScreen';
import FarmManagamentStackNavigator from './FarmManagamentStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Zarządzaj Gospodarstwami">
      <Drawer.Screen name="Zarządzaj Gospodarstwami" component={FarmManagamentStackNavigator} />
      <Drawer.Screen name="Moje Pola" component={FieldManagementScreen} />
      <Drawer.Screen name='Dodaj nowe pola' component={AddNewFieldsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

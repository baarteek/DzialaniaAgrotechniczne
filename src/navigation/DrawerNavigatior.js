import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FieldManagementScreen from '../screens/FieldManagementScreen';
import AddNewFieldsScreen from '../screens/AddNewFieldsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Moje Pola">
        <Drawer.Screen name="Moje Pola" component={FieldManagementScreen} />
        <Drawer.Screen name='Dodaj nowe pola' component={AddNewFieldsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
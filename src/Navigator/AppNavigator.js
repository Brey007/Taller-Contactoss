import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactListScreen from '../screens/ContactListScreen';
import AddContactScreen from '../screens/AddContactScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
          options={{ title: 'Contactos' }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContactScreen}
          options={{ title: 'Añadir Contacto Nuevo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

export default function AddContactScreen({ navigation, route }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { addContact } = route.params || {};
  const isValid = name.trim().length >= 3 && number.trim().length >= 7;

  const handleAdd = () => {
    if (!isValid) {
      Alert.alert(
        'Error',
        'El nombre debe tener al menos 3 caracteres y el número al menos 7 dígitos.'
      );
      return;
    }

    const newContact = {
      id: Date.now(),
      nombre: name.trim(),
      numero: number.trim(),
      favorite: false,
    };

    if (typeof addContact === 'function') {
      addContact(newContact);
    } else {
      console.warn('addContact no está definido');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agregar Contacto Nuevo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre (mínimo 3 caracteres)"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Teléfono (mínimo 7 dígitos)"
        value={number}
        onChangeText={setNumber}
        keyboardType="phone-pad"
      />

      <View style={styles.buttons}>
        <Button
          title="Agregar Contacto"
          onPress={handleAdd}
          disabled={!isValid}
        />
        {(name || number) && (
          <Button
            title="Limpiar"
            onPress={() => {
              setName('');
              setNumber('');
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
});

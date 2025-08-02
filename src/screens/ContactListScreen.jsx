import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import ContactItem from '../Components/ContactItem'

export default function ContactListScreen({ navigation }) {
  const [contacts, setContacts] = useState([
    { id: 1, nombre: 'Goku', numero: '300 5345468', favorite: false },
    { id: 2, nombre: 'Vegeta', numero: '301 6592401', favorite: false },
    { id: 3, nombre: 'Mami', numero: '302 9384923', favorite: false },
    { id: 4, nombre: 'Firulais', numero: '🦴🦴🦴', favorite: false },
    { id: 5, nombre: 'Charmander', numero: '666', favorite: false },
  ]);
  const [filter, setFilter] = useState('all');

  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  const toggleFavorite = (id) => {
    setContacts(prev =>
      prev.map(contact =>
        contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
      )
    );
  };

  const filterContact = contacts.filter(contact => {
    if (filter === 'favoritos') return contact.favorite;
    if (filter === 'no_favoritos') return !contact.favorite;
    return true;
  });

  return (
    <View style={styles.container}>
      <Button
        title="Crear un contacto nuevo"
        onPress={() =>
          navigation.navigate('AddContact', { addContact })
        }
      />
    <View style={styles.filters}>
      <Button
        title="Todos"
        onPress={() => setFilter('all')}
        color={filter === 'all' ? 'black' : '#ccc'}
      />
      <Button
        title="Favoritos"
        onPress={() => setFilter('favoritos')}
        color={filter === 'favoritos' ? 'goldenrod' : '#ccc'}
      />
      <Button
        title="No Favoritos"
        onPress={() => setFilter('no_favoritos')}
        color={filter === 'no_favoritos' ? 'gray' : '#ccc'}
      />
    </View>

      <ScrollView style={styles.list}>
        {contacts.length === 0 ? (
          <Text>No hay contactos</Text>
        ) : (
          filterContact.map( contact  => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onToggleFavorite={toggleFavorite}
            />
          ))
        )}
        <Text style={styles.info}>
          Pulsa un contacto para marcarlo como favorito
        </Text>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  list: { marginTop: 16 },
  info: { flex: 1, padding: 16, color: '#9b9b9b' },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12 
  }
  });

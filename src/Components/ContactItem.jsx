import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ContactItem({ contact, onToggleFavorite }) {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onToggleFavorite?.(contact.id)}
    >
      <Text style={[styles.name, contact.favorite && styles.favorite]}>
        {contact.favorite ? '⭐' : ''} {contact.nombre} – {contact.numero}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: {
    fontSize: 16,
    fontWeight: '500', 
  },
  favorite: {
    fontWeight: 'bold',
    color: 'goldenrod',
  },
});
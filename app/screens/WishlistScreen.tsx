import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Your wishlist is empty.</Text>
      <Text style={styles.subMessage}>
        Add courses to your wishlist to see them here!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  subMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});
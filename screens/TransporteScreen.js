import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransporteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transporte Screen</Text>
      {/* Aquí puedes mostrar la lista de opciones de transporte */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default TransporteScreen;

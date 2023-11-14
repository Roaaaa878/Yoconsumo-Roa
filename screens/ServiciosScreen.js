import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServiciosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Servicios Screen</Text>
      {/* Aquí puedes mostrar la lista de servicios como jardinero, electricista, mecánico, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ServiciosScreen;

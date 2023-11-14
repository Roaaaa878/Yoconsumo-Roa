import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../src/images/fondo.png')}
        style={styles.backgroundImage}
      />
       <TouchableOpacity
        style={styles.homebutton}
        onPress={() => navigation.navigate('Login')}
      >
        <Image source={require('../src/images/home.png')} style={styles.buttonImageHome} />
      </TouchableOpacity>


      <Text style={styles.title}>Menú Principal</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Otros')}
      >
        <Image source={require('../src/images/alimentos.png')} style={styles.buttonImage} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Servicios')}
      >
        <Image source={require('../src/images/servicios.png')} style={styles.buttonImage} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Transporte')}
      >
        <Image source={require('../src/images/transporte.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    marginBottom: 1,
  },
  buttonImage: {
    width: 320,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  buttonText: {
    fontSize: 8,
    color: 'blue',
  },
  buttonImageHome: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 0,
  },
});

export default MainScreen;

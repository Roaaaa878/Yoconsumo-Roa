import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';


const Otros = ({ navigation }) => {
  const handleSearch = (text) => {
    console.log('Texto de búsqueda:', text);
  };

  return (
    <View style={styles.container}>
<Image
        source={require('../src/images/fondo.png')}
        style={styles.backgroundImage}
      />

      <View style={styles.header}>
      <TouchableOpacity
        style={styles.homebutton}
        onPress={() => navigation.navigate('Main')}
      >
        <Image source={require('../src/images/home.png')} style={styles.buttonImageHome} />
      </TouchableOpacity>


        <Text style={styles.headerText}>¿QUÉ BUSCAMOS HOY?</Text>

        <TouchableOpacity
          style={styles.iconButton}
        
        >
        
        </TouchableOpacity>
      </View>

     
      <View style={styles.searchBar}>
        <Image source={require('../src/images/brujula.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar productos"
          onChangeText={handleSearch}
        />
      </View>

    
      

      <Text style={styles.title}>Menú Principal</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Productos')}
      >
        <Image source={require('../src/images/alimentos.png')} style={styles.buttonImageOptions} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Servicios')}
      >
<Image source={require('../src/images/servicios.png')} style={styles.buttonImageOptions} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Transporte')}
      >
        <Image source={require('../src/images/transporte.png')} style={styles.buttonImageOptions} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Transporte')}
      >
        <Image source={require('../src/images/transporte.png')} style={styles.buttonImageOptions} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Transporte')}
      >
        <Image source={require('../src/images/transporte.png')} style={styles.buttonImageOptions} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
    },
    iconButton: {
      padding: 20,
    },
    headerText: {
      fontSize: 25,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: 'white',
    },
    searchIcon: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    backgroundImage: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    title: {
      fontSize: 14,
      marginBottom: 10,
      color: 'white',
    },
  button: {
    alignItems: 'center',
    marginBottom: 1,
    
  },

  
  buttonImageOptions: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  buttonImageHome: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  buttonText: {
    fontSize: 8,
    color: 'blue',
  },
});

export default Otros;

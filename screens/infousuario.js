import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Animated,
  Linking,
} from 'react-native';

const RegistarScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleForgotPassword = () => {
    // Abre el enlace en Google cuando se presiona "¿Lo olvidaste?"
    Linking.openURL('https://www.gob.mx/curp/');
  };

  const handleRegister = () => {
    navigation.navigate('Regester');
  };

  return (
    <ImageBackground
      source={require('../src/images/fondo.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Animated.View style={[styles.circleContainer, { opacity: fadeAnim }]}>
          <Image source={require('../src/images/logo.png')} style={styles.logo} />
        </Animated.View>
        <Text style={styles.title}>¡Vamos a conocernos!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre Completo"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="CURP"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>¿Lo olvidaste? No te preocupes, da click AQUI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    backgroundColor: 'white',
    borderRadius: 75,
    padding: 20,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#ae0422',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titlenom: {
    fontSize: 20,
    marginBottom: 20,
    color: '#ae0422',
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#f3dbbb',
    borderColor: '#e77445',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'black',
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#a50025',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  linkText: {
    color: '#ae0422',
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default RegistarScreen;

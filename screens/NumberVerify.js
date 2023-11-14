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
  Picker,
} from 'react-native';

const NumberVerify = ({ navigation }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');


  const [password, setPassword] = useState('');
  const [selectedPrefix, setSelectedPrefix] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLogin = () => {
    navigation.navigate('info');
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password Pressed");
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
        <Text style={styles.title}>¡Introduce tu código enviado al: +52 55 4*** ***2!</Text>

        {/* Contenedor de fila para alinear horizontalmente el Picker y el TextInput */}
        <View style={styles.inputContainer}>
          {/* Añade el componente Picker */}

            {/* Espacio entre Picker y TextInput */}
            <View style={{ width: 10}} />

          {/* Campo de entrada del número de teléfono */}
          <TextInput
            style={styles.inputnumero}
            placeholder=""
            value={num1}
            onChangeText={(Number) => setNum1(Number)}
          />
           <TextInput
            style={styles.inputnumero}
            placeholder=""
            value={num2}
            onChangeText={(Number) => setNum2(Number)}
          />
           <TextInput
            style={styles.inputnumero}
            placeholder=""
            value={num3}
            onChangeText={(Number) => setNum3(Number)}
          />
           <TextInput
            style={styles.inputnumero}
            placeholder=""
            value={num4}
            onChangeText={(Number) => setNum4(Number)}
          />
        </View>

       
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Siguente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Recibir codigo por WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Recibir codigo por SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.linkText}>Reenviar Código</Text>
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
  inputContainer: {
    flexDirection: 'row', // Alinear horizontalmente
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1, // Para que ocupe el espacio restante en la fila
    height: 60,
    backgroundColor: '#f3dbbb',
    borderColor: '#e77445',
    borderWidth: 1,
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
  inputnumero: {
    width: '22%',
    height: 40,
    backgroundColor: '#f3dbbb',
    borderColor: '#e77445',
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 8,
    fontSize: 16,
  },
});

export default NumberVerify;

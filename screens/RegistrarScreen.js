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

const RegistarScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
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
    navigation.navigate('Number');
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
        <Text style={styles.title}>¡Ingresa tu Numero Celular!</Text>

        {/* Contenedor de fila para alinear horizontalmente el Picker y el TextInput */}
        <View style={styles.inputContainer}>
          {/* Añade el componente Picker */}
          <Picker
            selectedValue={selectedPrefix}
            onValueChange={(itemValue, itemIndex) => setSelectedPrefix(itemValue)}
            style={styles.inputnumero}
          >
            <Picker.Item label="Seleccionar prefijo" value="" />
            <Picker.Item label="+1" value="+1" />
            <Picker.Item label="+52" value="+52" />
            <Picker.Item label="+55" value="+55" />
            <Picker.Item label="+54" value="+54" />
            <Picker.Item label="+57" value="+57" />
            <Picker.Item label="+56" value="+56" />
            <Picker.Item label="+58" value="+58" />
            <Picker.Item label="+51" value="+51" />
            <Picker.Item label="+593" value="+593" />
            <Picker.Item label="+53" value="+53" />
           

            {/* Agrega más prefijos según tus necesidades */}
          </Picker>

            {/* Espacio entre Picker y TextInput */}
            <View style={{ width: 10 }} />

          {/* Campo de entrada del número de teléfono */}
          <TextInput
            style={styles.input}
            placeholder="+000 00 0000 0000"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Acepto recibir mi código vía WhatsApp o SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.linkText}>¡Ayuda!</Text>
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
    height: 40,
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

export default RegistarScreen;

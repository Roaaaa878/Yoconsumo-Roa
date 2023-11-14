//esta pantalla es el inicio de sección osea LOGIN
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
} from 'react-native';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "388838036097-27m9oif1clig1p9grvbpse5vsqgg574i.apps.googleusercontent.com",
    iosClientId: "388838036097-m8109u7agaigi23h06u0q4tdp123d4ii.apps.googleusercontent.com",
    webClientId: "388838036097-5qv838m4b7egkfstg3aa8h0aum79iiu0.apps.googleusercontent.com",
  });
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
   
    navigation.navigate('Main');
  };

  const handleForgotPassword = () => {
   
    console.log("Forgot Password Pressed");
  };

  const handleRegister = () => {
   
    navigation.navigate('Regester');  };
    React.useEffect(() => {
      handleSignInWithGoogle();
    }, [response]);
  
    const handleSignInWithGoogle = async () => {
      const user = await AsyncStorage.getItem("@user");
      
      if (!user && response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      } else {
        setUserInfo(user ? JSON.parse(user) : null);
      }
    };
  
    const getUserInfo = async (token) => {
      if (!token) return;
  
      try {
        const userInfoResponse = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        const user = await userInfoResponse.json();
  
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);
      } catch (error) {
        console.error("Error fetching user info", error);
      }
    };
  
    const handleLogout = async () => {
      await AsyncStorage.removeItem("@user");
      setUserInfo(null);
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
        <Text style={styles.title}>¡Bienvenido de nuevo!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        {/* Forgot Password Link */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        {/* Register Link */}
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
        <View style={styles.containergoogle}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => promptAsync()}
          >
            <Image
              source={require('../src/images/googlee.png')}
              style={styles.googleIcon}
            />
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  containergoogle: {
    marginTop: 20, // Adjust the margin as needed
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#f3dbbb',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  googleIcon: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
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

export default LoginScreen;

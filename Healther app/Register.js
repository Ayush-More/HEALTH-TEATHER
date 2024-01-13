import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpScreen = ({ navigation }) => {
  const [clientID, setClientID] = useState('');
  const [clientLogoURL, setClientLogoURL] = useState('');
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!clientID || !clientLogoURL || !userID || !username || !password || !confirmPassword) {
      Alert.alert('All fields are required');
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
    } else {
      // Perform signup logic here, you can use the entered values
      Alert.alert('Sign Up Successful');
    }
  };

  return (
    <LinearGradient
      colors={['#8e44ad', '#c0392b']} // Gradient colors from purple to red
      style={styles.container}
    >
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Client ID"
        placeholderTextColor="#ecf0f1" // Light gray text color
        onChangeText={(text) => setClientID(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Client Logo URL"
        placeholderTextColor="#ecf0f1"
        onChangeText={(text) => setClientLogoURL(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="User ID"
        placeholderTextColor="#ecf0f1"
        onChangeText={(text) => setUserID(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#ecf0f1"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#ecf0f1"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        placeholderTextColor="#ecf0f1"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>Already have an account? Login here.</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 8,
    color: '#ecf0f1', 
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: '#fff',
  },
});

export default SignUpScreen;

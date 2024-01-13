import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    clientId: "",
    clientLogoUrl: "",
    userID: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  console.log(formData);

  const handleSubmit = async (e) => {
    try {
      const response = await fetch("http://192.168.0.103:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        Alert.alert("Sign Up Successful");
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <LinearGradient
      colors={["#8e44ad", "#c0392b"]} // Gradient colors from purple to red
      style={styles.container}
    >
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Client ID"
        placeholderTextColor="#ecf0f1" // Light gray text color
        value={formData.clientId}
        onChangeText={(text) => handleChange("clientId", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Client Logo URL"
        placeholderTextColor="#ecf0f1"
        value={formData.clientLogoUrl}
        onChangeText={(text) => handleChange("clientLogoUrl", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="User ID"
        placeholderTextColor="#ecf0f1"
        value={formData.userID}
        onChangeText={(text) => handleChange("userID", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#ecf0f1"
        value={formData.userName}
        onChangeText={(text) => handleChange("userName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#ecf0f1"
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        placeholderTextColor="#ecf0f1"
        value={formData.confirmPassword}
        onChangeText={(text) => handleChange("confirmPassword", text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    color: "#ecf0f1",
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: "#fff",
  },
});

export default SignUpScreen;

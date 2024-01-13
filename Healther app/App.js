import React from "react";
import { View } from "react-native";
import { NativeRouter as Router, Route, Routes } from "react-router-native";

import SignUpScreen from "./Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
}

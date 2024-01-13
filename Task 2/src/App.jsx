import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authorization from "./pages/authorization.jsx";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Authorization />} />
        </Routes>
    </Router>
  );
}

export default App;

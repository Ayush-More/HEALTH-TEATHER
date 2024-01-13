import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authorization from "./pages/authorization.jsx";


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Authorization/>} />  
        </Routes>
      </div>
  </Router>
  )
}

export default App

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Login from "./components/Login";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/employees" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;

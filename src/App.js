import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Authentification from "./pages/Authentification";
import { useEffect, useState } from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./App.css";
import Apropos from "./pages/Apropos";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/authentification/*" element={<Authentification />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </Router>
    </div>
  );
}
// color : #ed00ce #282c34
export default App;

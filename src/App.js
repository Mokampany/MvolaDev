import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import FourOhFour from "./pages/FourOhFour"
import Home from "./pages/Home";
import HomeGuest from "./pages/HomeGuest";
import HomeUser from "./pages/HomeUser";
import Authentification from "./pages/Authentification";
import { useEffect, useState } from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./App.css";
import Apropos from "./pages/Apropos";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/homeUser" element={<HomeUser />}></Route>
          <Route path="/homeGuest" element={<HomeGuest />}></Route>
          <Route path="/authentification/*" element={<Authentification />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/*" element={<FourOhFour />} />
        </Routes>
      </Router>
    </div>
  );
}
// color : #ed00ce #282c34
export default App;

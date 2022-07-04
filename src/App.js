import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Authentification from "./pages/Authentification";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/authentification"
            element={<Authentification />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

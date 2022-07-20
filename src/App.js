import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import FourOhFour from "./pages/FourOhFour/FourOhFour"
import HomeGuest from "./pages/HomePages/HomeGuest";
import HomeUser from "./pages/HomePages/HomeUser";
import Authentification from "./pages/Authentification/Authentification";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./App.css";
import Apropos from "./pages/Apropos/Apropos";
import Nav from "./components/Nav";
import styled from "@emotion/styled";
import ChoixCommande from "./pages/Commande/ChoixCommande";

const Container = styled.div`
  .App{
    position: relative;
  }
`
function App() {
  return (
    <Container>
      <div className="App" >
        <Router>
          <Nav />
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/" element={<HomeGuest />}></Route>
            <Route path="/homeUser" element={<HomeUser />}></Route>
            <Route path="/homeGuest" element={<HomeGuest />}></Route>
            <Route path="/authentification/*" element={<Authentification />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/commander/*" element={<ChoixCommande />}/>
            <Route path="/*" element={<FourOhFour />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </Container>
  );
}
// color : #ed00ce #282c34
export default App;

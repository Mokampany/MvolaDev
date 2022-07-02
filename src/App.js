import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Authentification from "./pages/Authentification";
import "./assets/bootstrap/css/bootstrap.min.css"
import "./App.css";
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/authentification" element={<Authentification />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
import "./App.css";
import Iframe from "react-iframe";

function App() {
  //let link = "https://www.youtube.com/watch?v=BVmJXTQE0Ss";
  let link = "https://fb.watch/d-Z3gTKz6H%2Fvideos%2F447142007208593";
  let src = "";
  if (link.includes("fb")) {
    src = "https://www.facebook.com/plugins/video.php?href=" + link;
  } else if (link.includes("youtube")) {
    src = link.replace("watch?v=", "embed/");
  } else {
    src = "node_upload_video_link";
  }

  return (
    <div className="App">
      <header className="App-header">
        <Iframe url={src} width="450px" height="300px" allow="fullscreen" />
      </header>
    </div>
  );
}

export default App;
*/

import HomeComponent from "./pages/Home/HomeComponent";
import AboutComponent from "./pages/About/AboutComponent"; 
import Home02Component from "./pages/Home02/Home02Component";
import Navbar from "./components/Navigation/Navbar";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div >
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home02Component/>}/>
      <Route path="/about" element={<AboutComponent/>}/>
    </Routes>
     {/* <Home02Component/> */}
    </div>
  );
}

export default App;

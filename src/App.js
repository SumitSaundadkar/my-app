import "./App.css";

import {LandingPage} from "./pages/Landingpage/Landing";
import {  Routes, Route,} from "react-router-dom";
import {Explore} from "./pages/Landingpage/ExplorePage/Explore";



function App() {
  return (
    <div className="App">

    <Routes>
         <Route path="/" element={ <LandingPage/>}/>
         <Route path="/Explore" element={ <Explore/>}/>
    </Routes>
   


      
    </div>
  );
}

export default App;

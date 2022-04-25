import "./App.css";

import {LandingPage} from "./pages/Landingpage/Landing";
import {  Routes, Route,} from "react-router-dom";
import {Explore} from "./pages/Landingpage/ExplorePage/Explore";
import {Video} from './components/video/Video';
import {LikePage} from './pages/LikePage/LikePage';
import {WatchLaterPage} from './pages/watchLater/Watchlater'



function App() {
  return (
    <div className="App">

    <Routes>
         <Route path="/" element={ <LandingPage/>}/>
         <Route path="/explore" element={ <Explore/>}/>
         <Route path="/video/:videoId" element={ <Video/>}/>
         <Route path="/Like" element={ <LikePage/>}/>
         <Route path="/watch" element={ <WatchLaterPage/>}/>
        
    </Routes>
   


      
    </div>
  );
}

export default App;

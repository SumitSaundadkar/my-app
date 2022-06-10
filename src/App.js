import "./App.css";

import { LandingPage } from "./pages/Landingpage/Landing";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./pages/Landingpage/ExplorePage/Explore";
import { Video } from "./components/video/Video";
import { LikePage } from "./pages/LikePage/LikePage";
import { WatchLaterPage } from "./pages/watchLater/Watchlater";
import { PlayListCraetePage } from "./components/playlistmodalcard/createPlaylistPage";
import { InnerPlayListPage } from "./pages/innerplaylistpage/innerPlayList";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { LoginPage } from "./pages/Login/Login";
import { SignUpPage } from "./pages/SignUp/signUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/Like" element={<LikePage />} />
        <Route path="/watch" element={<WatchLaterPage />} />
        <Route path="/playlist" element={<PlayListCraetePage />} />
        <Route
          path="/playlist-video/:playlistId"
          element={<InnerPlayListPage />}
        />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;

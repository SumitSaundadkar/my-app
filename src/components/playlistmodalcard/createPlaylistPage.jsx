import { useFilterContext } from "../../contexts/filterContext";
import { NavBar } from "../Navbar/Navbar";
import { SideBar } from "../sidebar/Sidebar";
import { PlayListCard } from "../../pages/playlist/playlist";
import "../playlistmodalcard/createplaylist.css";
import { Link } from "react-router-dom";
const PlayListCraetePage = () => {
  const { videoListState } = useFilterContext();
  return (
    <div>
      <NavBar />
      <SideBar />

      <div className="playlist_container">
        {videoListState.playlist.length === 0 ? (
          <div className="empty_list">
            <h2>Empty Playlist!</h2>
          </div>
        ) : (
          <Link to="/explore"></Link>
        )}

        {videoListState.playlist.map((item) => (
          <PlayListCard key={item.playlistId} video={item} />
        ))}
      </div>
    </div>
  );
};
export { PlayListCraetePage };

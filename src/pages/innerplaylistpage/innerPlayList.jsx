import { NavBar } from "../../components/Navbar/Navbar";
import { SideBar } from "../../components/sidebar/Sidebar";
import { VideoCard } from "../../components/videocard/Videocard";
import { useParams } from "react-router-dom";
import { useFilterContext } from "../../contexts/filterContext";
import "../innerplaylistpage/inner.css";

const InnerPlayListPage = () => {
  const { videoListState } = useFilterContext();
  const { playlistId } = useParams();

  const filterByIdFun = (playlist, id) => {
    return playlist.find((videoId) => videoId.playlistId === id);
  };

  const readyPlaylistVideo = filterByIdFun(videoListState.playlist, playlistId);
  console.log(readyPlaylistVideo.playlistVideos);

  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="inner_container">
        {readyPlaylistVideo.playlistVideos.map((item) => {
          return <VideoCard key={item._id} video={item} />;
        })}
      </div>
    </div>
  );
};
export { InnerPlayListPage };

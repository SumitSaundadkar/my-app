import "../HistoryPage/history.css";
import { NavBar } from "../../components/Navbar/Navbar";
import { SideBar } from "../../components/sidebar/Sidebar";
import { VideoCard } from "../../components/videocard/Videocard";
import { useFilterContext } from "../../contexts/filterContext";

const HistoryPage = () => {
  const { videoListState } = useFilterContext();
  const likeVideoList = [...videoListState.likedVideo].reverse();

  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="history_container">
        <h1>History</h1>
        <div className="history_video">
          {likeVideoList.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};
export { HistoryPage };

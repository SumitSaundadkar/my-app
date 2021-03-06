import "../LikePage/likepage.css";
import { NavBar } from "../../components/Navbar/Navbar";
import { SideBar } from "../../components/sidebar/Sidebar";
import { VideoCard } from "../../components/videocard/Videocard";
import { useFilterContext } from "../../contexts/filterContext";

const LikePage = () => {
  const { videoListState } = useFilterContext();
  const historyList = [...videoListState.history];

  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="Like_container">
        <h1>Like</h1>
        <div className="like_video">
          {historyList.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};
export { LikePage };

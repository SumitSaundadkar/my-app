import { NavBar } from "../Navbar/Navbar";
import { SideBar } from "../sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { HorizontalCard } from "../../pages/SuggestCard/Horizontalcard";
import "../video/video.css";
import { useFilterContext } from "../../contexts/filterContext";
import { useVideoContext } from "../../contexts/videoContext";
import { PlayListModal } from "../playListModal/playListModal";
import { useState } from "react";

const Video = () => {
  const { videoList, loading } = useVideoContext();
  const { videoId } = useParams();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const { videoListState, videoListDispatch } = useFilterContext();
  const video = videoList.find((item) => item._id === videoId);
  const suggestedVideoList = [...videoList]
    .filter((item) => item._id !== videoId)
    .slice(0, 4);
  return (
    <div>
      <NavBar />
      <SideBar />
      {showPlaylistModal && (
        <PlayListModal setModal={setShowPlaylistModal} video={video} />
      )}

      <div className="video_page_container">
        <iframe
          width="35rem"
          height="22rem"
          src={video.videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
          disabled={loading}
        ></iframe>

        <div className="video_title">
          {video.description}
          {video.creator}
        </div>

        <div className="video_buttons">
          <button className="video_toggles"> {video.date}</button>

          <button
            onClick={() => videoListDispatch({ type: "LIKE", payload: video })}
            className="video_toggles"
          >
            <i class="fa-solid fa-heart fa-md"></i>{" "}
            {videoListState.likedVideo.includes(video) ? "Liked" : "Like"}
          </button>

          <button
            className="video_toggles"
            onClick={() =>
              videoListDispatch({ type: "WATCH_LATER", payload: video })
            }
          >
            <i class="fa-solid fa-clock fa-md"></i>Watch Later
          </button>
          <button
            onClick={() => {
              setShowPlaylistModal(true);
            }}
            className="video_toggles"
          >
            <i class="fa-solid fa-folder-plus fa-md"></i>Playlist
          </button>
        </div>

        <div className="suggest_video_container">
          <h2 className="suggest_heading">Suggested Video</h2>
          {suggestedVideoList.map((video) => {
            return <HorizontalCard key={video._id} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};
export { Video };

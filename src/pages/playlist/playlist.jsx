import "../playlist/playlist.css";
import { useFilterContext } from "../../contexts/filterContext";
import { useNavigate } from "react-router-dom";

const PlayListCard = ({ video }) => {
  const { videoListDispatch } = useFilterContext();
  const navigate = useNavigate();
  return (
    <div
      className="playlist_card"
      onClick={() => navigate(`/playlist-video/${video.playlistId}`)}
    >
      <div className="thumbnail_img">
        <img
          className="thumbnail-img"
          src={video.playlistVideos[0].thumbnailImg}
          alt="img-failed"
        />
      </div>
      <div className="playlist_name">
        {video.playlistName}
        <i
          onClick={(e) => {
            e.stopPropagation();
            videoListDispatch({
              type: "Delete Playlist",
              payload: video.playlistId,
            });
          }}
          className="fa-solid fa-trash add"
        ></i>
      </div>
    </div>
  );
};
export { PlayListCard };

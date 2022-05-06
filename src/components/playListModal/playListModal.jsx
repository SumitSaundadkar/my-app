import "../playListModal/playlistmodal.css";
import { useState } from "react";
import { useFilterContext } from "../../contexts/filterContext";
const PlayListModal = ({ setModal, video }) => {
  const [playlistName, setPlaylistName] = useState({
    playListName: "",
    createPlaylistStatus: false,
  });
  const { videoListState, videoListDispatch } = useFilterContext();
  return (
    <div className="modal_container">
      <div className="modal">
        <h2 className="dlt_icon">
          Save to{" "}
          <i onClick={() => setModal(false)} class="fa-solid fa-xmark"></i>
        </h2>
        {videoListState.playlist.map((item) => {
          return (
            <div className="new_playlist_contanier">
              <input
                type="checkbox"
                name=""
                id=""
                className="playlist-checkbox"
                checked={item.playlistVideos.includes(video)}
                onChange={(e) =>
                  e.target.checked === true
                    ? videoListDispatch({
                        type: "Add to Playlist",
                        payload: { playlistObj: item, video: video },
                      })
                    : videoListDispatch({
                        type: "Remove From Playlist",
                        payload: { playlistObj: item, video: video },
                      })
                }
              />
              <label>{item.playlistName}</label>
            </div>
          );
        })}

        <div>
          {" "}
          <input
            className="modal_input"
            onChange={(e) =>
              setPlaylistName((item) => ({
                ...item,
                playListName: e.target.value,
              }))
            }
            type="text"
            placeholder="Create Playlist"
            name=""
            id="playlist-name-input"
          />
          <button
            className="btn btn-info"
            onClick={() => {
              setPlaylistName((item) => ({
                ...item,
                createPlaylistStatus: !item.createPlaylistStatus,
              }));
              videoListDispatch({
                type: "Create Playlist",
                payload: playlistName.playListName,
              });
            }}
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
};
export { PlayListModal };

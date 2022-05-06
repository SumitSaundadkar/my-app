import { v4 as uuid } from "uuid";
const { createContext, useContext, useReducer } = require("react");

const videoReduceFun = (videoListState, action) => {
  switch (action.type) {
    case "CATEGORY":
      return {
        ...videoListState,
        category: action.payload,
      };
    case "HISTORY":
      return {
        ...videoListState,
        history: videoListState.history.includes(action.payload)
          ? [...videoListState.history]
          : [...videoListState.history, action.payload],
      };
    case "CLEAR_HISTORY":
      return {
        ...videoListState,
        history: [],
      };
    case "LIKE":
      return {
        ...videoListState,
        likedVideo: videoListState.likedVideo.includes(action.payload)
          ? videoListState.likedVideo.filter(
              (video) => video !== action.payload
            )
          : [...videoListState.likedVideo, action.payload],
      };
    case "WATCH_LATER":
      return {
        ...videoListState,
        watchLater: videoListState.watchLater.includes(action.payload)
          ? videoListState.watchLater.filter(
              (video) => video !== action.payload
            )
          : [...videoListState.watchLater, action.payload],
      };
    case "Create Playlist":
      return {
        ...videoListState,
        playlist: [
          ...videoListState.playlist,
          {
            playlistId: uuid(),
            playlistName: action.payload,
            playlistVideos: [],
          },
        ],
      };
    case "Add to Playlist":
      return {
        ...videoListState,
        playlist: videoListState.playlist.map((video) =>
          video.playlistId === action.payload.playlistObj.playlistId
            ? {
                ...video,
                playlistVideos: [...video.playlistVideos, action.payload.video],
              }
            : video
        ),
      };
    case "Remove From Playlist":
      return {
        ...videoListState,
        playlist: videoListState.playlist.map((video) =>
          video.playlistId === action.payload.playlistObj.playlistId
            ? {
                ...video,
                playlistVideos: video.playlistVideos.filter(
                  (removeVideo) => removeVideo !== action.payload.video
                ),
              }
            : video
        ),
      };
    case "Delete Playlist":
      return {
        ...videoListState,
        playlist: videoListState.playlist.filter(
          (video) => video.playlistId !== action.payload
        ),
      };
    default:
      return {
        videoListState,
      };
  }
};

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [videoListState, videoListDispatch] = useReducer(videoReduceFun, {
    category: "all",
    likedVideo: [],
    watchLater: [],
    history: [],
    playlist: [],
  });
  return (
    <FilterContext.Provider value={{ videoListState, videoListDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilterContext };

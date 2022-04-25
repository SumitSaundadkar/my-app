const {  createContext, useContext, useEffect, useState  } = require("react");

const axios = require("axios").default;

const VideoContext=createContext()

const VideoContextProvider = ({ children }) => {
    const [videoList, setVideoList] = useState([]);
    const [loading,setLoading]=useState(false);


  
    useEffect(() => {
      const getVideos = async () => {
        try {
          const response = await axios.get("/api/videos");
          setVideoList(response.data.videos);
          setLoading(true)
        } catch (err) {
          console.log("error from video-context's catch", err);
          setLoading(false)
        }
      };
      getVideos();
    }, []);
  
    return (
      <VideoContext.Provider value={{ videoList, setVideoList,loading,setLoading }}>
        {children}
      </VideoContext.Provider>
    );
  };
  
  const useVideoContext = () => useContext(VideoContext);
  
  export { VideoContextProvider, useVideoContext };
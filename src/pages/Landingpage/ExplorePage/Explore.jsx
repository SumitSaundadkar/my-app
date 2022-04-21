import { NavBar } from "../../../components/Navbar/Navbar";
import { SideBar } from "../../../components/sidebar/Sidebar";
import "../ExplorePage/expolre.css";
import { VideoCard } from "../../../components/videocard/Videocard";
import { useFilterContext } from "../../../contexts/filterContext";
import { useVideoContext } from "../../../contexts/videoContext";
const Explore=()=>{
    const { videoList } = useVideoContext();
    const { videoListState,videoListDispatch } = useFilterContext();

    const filteredVideoList =
    videoListState.category === "all"
      ? [...videoList]
      : [...videoList].filter(
          (video) => video.category === videoListState.category
        );
     
    return(
       <div>
             <NavBar/>
             <SideBar/>
           <div className="chips_container">
               <button  onClick={() =>
                videoListDispatch({ type: "CATEGORY", payload: "all" })
              } className="btn btn-outline-primary">
                    <i class="fa-solid fa-layer-group"></i>All
               </button>
               <button onClick={() =>
                videoListDispatch({ type: "CATEGORY", payload: "Tamil" })
              } className="btn btn-outline-primary">
                    <i class="fa-solid fa-music"></i>Tamil
               </button>
               <button  onClick={() =>
                videoListDispatch({ type: "CATEGORY", payload: "Hindi" })
              } className="btn btn-outline-primary">
                     <i class="fa-solid fa-clapperboard"></i>Hindi
               </button>
               <button  onClick={() =>
                videoListDispatch({ type: "CATEGORY", payload: "concert" })
              } className="btn btn-outline-primary">
                      <i class="fa-solid fa-music"></i>Concert
               </button>
               <button onClick={() =>
                videoListDispatch({ type: "CATEGORY", payload: "Berklee" })
              } className="btn btn-outline-primary">
                     <i class="fa-solid fa-microphone"></i>Berkley
               </button>
               <button onClick={() =>
                videoListDispatch({ type: "CATEGORY", payload: "Podcast" })
              } className="btn btn-outline-primary">
                      <i class="fa-solid fa-music"></i>Podcast
               </button>
           </div> 
           
           <div className="video_container">
           {filteredVideoList.map((videoItem) => {
            return <VideoCard key={videoItem._id} video={videoItem} />;
          })}

           </div>

       </div>
        

    )
}
export {Explore}
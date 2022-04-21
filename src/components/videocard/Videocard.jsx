import '../videocard/videocard.css';
import { useFilterContext } from '../../contexts/filterContext';
import { useNavigate } from "react-router-dom";

const VideoCard=({video})=>{
    const navigate = useNavigate();
    const { videoListDispatch } = useFilterContext();
    const videoClickHandler = (videoId) => {
       navigate(`/video/${videoId}`);
    };
    

   
 return(
    <div className='video_card'>
      <img className='thumbnail_img'
      alt='img'
       src={video.thumbnailImg}
         onClick={() => {
        videoClickHandler(video.id);
        videoListDispatch({ type: "HISTORY", payload: video });
      }}
      />
        <div className='card_content'>
            <div className='card_description'>
             <span> {video.description}</span>
            </div>
        </div>

    </div>
    
   

    )
}
export {VideoCard}
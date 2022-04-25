 import { useFilterContext } from "../../contexts/filterContext";
import { useNavigate } from "react-router-dom";

import '../SuggestCard/horizontalcard.css';



const HorizontalCard=({video})=>{
    const navigate=useNavigate();
    const { videoListDispatch } = useFilterContext();
    const videoCardClickHandler = (videoId) => {
        navigate(`/video/${videoId}`);
      };

    return(
     <div className="horizontal_card">
        <img className='thumb_img'
       alt='img'
       src={video.thumbnailImg}
         onClick={() => {
       videoCardClickHandler(video._id);
       videoListDispatch({ type: "HISTORY", payload: video })
       
      }}
      />
      <div className='horizontal_content'>
            <div className='card_description'>
             <span > {video.description} <span className="suggested_headings"> {video.date}</span> </span>
            
            </div>
    </div>

        </div>

    )
}
export {HorizontalCard}
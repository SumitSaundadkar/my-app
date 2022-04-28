import { NavBar } from '../../components/Navbar/Navbar';
import { SideBar } from '../../components/sidebar/Sidebar';
import { VideoCard } from '../../components/videocard/Videocard';
import { useFilterContext } from '../../contexts/filterContext';
import '../watchLater/watchlater.css';

const WatchLaterPage=()=>{
    const {videoListState}=useFilterContext();
    const  watchLaterList=[...videoListState.watchLater].reverse();

    return(
        <div>
             <NavBar/>
             <SideBar/>
           <div className='watch_container'>
             <h1>Watch Later</h1>
             <div className='watch_video'>
             { watchLaterList.map((video)=>(
                 <VideoCard video={video}/>
             ))}
             </div>
           </div>  
        </div>

    )
}
export {WatchLaterPage}
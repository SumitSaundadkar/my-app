import '../sidebar/sidebar.css';
import {Link} from "react-router-dom"
const SideBar=()=>{
    
    return (
    <div className="sidebar_container">

         <Link to="/">
                 <span className="sidebar-links"><i className="fa-solid fa-house fa-md"></i><p>Home</p></span>
         </Link>
    
         <Link to="/explore"> 
               <span className="sidebar-links" ><i class="fa-solid fa-compass fa-md"></i><p>Explore</p></span>
         </Link>
         <Link to="/platlist">
             <span className="sidebar-links" ><i class="fa-solid fa-folder-plus fa-md"></i><p>Playlist</p></span>
         </Link>
         <Link to="/like">
               <span className="sidebar-links" ><i class="fa-solid fa-heart fa-md"></i><p>Like</p></span>
         </Link>
         <Link to="watch">
           <span className="sidebar-links" ><i class="fa-solid fa-clock fa-md"></i><p>Watch Later</p></span></Link>
         <Link to="/history">  
           <span className="sidebar-links" ><i class="fa-solid fa-clock-rotate-left fa-md"></i><p>History</p></span>
         </Link>
    </div>

    )
}
export {SideBar}
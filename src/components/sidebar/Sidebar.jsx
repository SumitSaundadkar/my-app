import '../sidebar/sidebar.css';
import {Link} from "react-router-dom"
const SideBar=()=>{
    
    return (
    <div className="sidebar_container">

         <Link to="/">
                 <a className="sidebar-links" href="/"><i className="fa-solid fa-house fa-md"></i><p>Home</p></a>
         </Link>
    
        <a className="sidebar-links" href="/"><i class="fa-solid fa-compass fa-md"></i><p>Explore</p></a>
        <a className="sidebar-links" href="/"><i class="fa-solid fa-folder-plus fa-md"></i><p>Playlist</p></a>
        <a className="sidebar-links" href="/"><i class="fa-solid fa-heart fa-md"></i><p>Like</p></a>
        <a className="sidebar-links" href="/"><i class="fa-solid fa-clock fa-md"></i><p>Watch Later</p></a>
        <a className="sidebar-links" href="/"><i class="fa-solid fa-clock-rotate-left fa-md"></i><p>History</p></a>
    </div>

    )
}
export {SideBar}
import { NavBar } from "../../../components/Navbar/Navbar";
import { SideBar } from "../../../components/sidebar/Sidebar";
import "../ExplorePage/expolre.css";
const Explore=()=>{
    return(
       <div>
              <NavBar/>
             <SideBar/>
           <div className="chips_container">
               <button className="btn btn-outline-primary"><i class="fa-solid fa-layer-group"></i>All</button>
               <button className="btn btn-outline-primary"><i class="fa-solid fa-music"></i>Tamil</button>
               <button className="btn btn-outline-primary"><i class="fa-solid fa-clapperboard"></i>Hindi</button>
               <button className="btn btn-outline-primary"><i class="fa-solid fa-music"></i>Concert</button>
               <button className="btn btn-outline-primary"><i class="fa-solid fa-microphone"></i>Berkley</button>
               <button className="btn btn-outline-primary">Documentry</button>



           </div>  

       </div>
        

    )
}
export {Explore}
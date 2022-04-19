import '../Navbar/navbar.css';
import {Link} from "react-router-dom";



const NavBar=()=>{
    return(
    <header>
        <Link to="/">
            <div className="logo">
                  ARR
             </div>
        </Link>
          <div>
             <ul>
                <li><input className='searchbar' placeholder="search" /></li>
                <li><button className='btn btn-primary'>Login</button></li>
            </ul>
         </div>
         
 </header>

    )
}
export {NavBar}
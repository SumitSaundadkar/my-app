import {NavBar} from '../../components/Navbar/Navbar';
import "../Landingpage/landing.css";
import {Link} from "react-router-dom";

const LandingPage=()=>{
    return(
       <div>
           <NavBar/>
            <div className='landing_page_container'>
              <div className='landing_page_left'>
                <img className='png-image' src="https://www.abc2india.com/images/pages/im-ar-rahman.png" alt="pic" />
              </div>
              <div className='landing_page_right'>
               <h1 className='right-side-heading'>Your music always works, Rahman sir....</h1>
               <Link to="/Explore"> <button className='btn btn-primary'>EXPOLRE & ENJOY</button></Link>
              
              </div>
            </div>
            <footer className='page-footer'>
               <div className='page_footer_linkbar'>
               <a href="#top" className='social-connecting-links'><i class="fa-brands fa-github"></i></a>
               <a href="#top" className='social-connecting-links'> <i class="fa-brands fa-linkedin-in"></i></a>
               <a href="#top" className='social-connecting-links'> <i class="fa-brands fa-twitter"></i></a>
            
               
               </div>
            
            
            </footer>
      </div>
        
    )
}
export {LandingPage}
import Navbar3 from '../Navbars/Navbar3';
import Navbar2 from '../Navbars/Navbar2';
import Carousel from '../Carosel/carosel';
import Product from '../pages/UserHomeProducts';
import Footer from '../Footer/Footer';
import './home.css'

import {Aession} from '../pages/session';


function LandingPage(){
    Aession();
    return(
       <>
       
       <Navbar3 />
       <Navbar2 />
       <Carousel />
       <h1 style={{color:'white',marginLeft:'37vw',fontFamily:' "Trebuchet MS", Helvetica, sans-serif'}}>Welcome to Mini Cart!</h1>
       <Product />
       <Footer />
       
       </>
    )
}

export default LandingPage;
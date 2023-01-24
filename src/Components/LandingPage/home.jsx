import Navbar from '../Navbars/Navbar1';
import Navbar2 from '../Navbars/Navbar2';
import Carousel from '../Carosel/carosel';
import Product from '../pages/HomeProducts';
import Footer from '../Footer/Footer';
import './home.css'
function LandingPage(){
    return(
       <>
       <Navbar />
       <Navbar2 />
       <Carousel />
       <Product />
       <Footer />
      
       </>
    )
}

export default LandingPage;
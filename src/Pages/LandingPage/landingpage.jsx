import './landingpage.scss';
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";
import Banner from "../../Components/Banner/banner";
import About from "../../Components/About/about";

function LandingPage() {
  return (
    <div className="LandingPage">
   <Navbar/>
   <Banner/>
   <About/> 
   <Footer/>
    </div>
  );
}

export default LandingPage;

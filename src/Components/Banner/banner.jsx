import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github.png";
import illustration from "../../Images/illustration.jfif";

function Banner() {
  return (
    <div className="flex">
    <div>
        <h6>Zainab Oyedeji -</h6>
        <p>Developer from Lagos,Nigeria.</p>
        <div className="flex">
            
        <a href="https://www.linkedin.com/in/zainab-oyedeji-015764174/"><img src={linkedin} alt="linkedin"/></a>
        <a href="https://github.com/zainaboyedeji"><img src={github} alt="github"/></a>
            </div>
    </div>
    <div>
        <img src={illustration} alt=""illustration/>
    </div>
    </div>
  );
}

export default Banner;
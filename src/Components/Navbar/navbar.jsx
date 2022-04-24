import './navbar.scss';
import wave from "../../Images/wave.png"

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <img src={wave} alt="wave" className='w-3'/>
        <p> Zainab O.</p>
        </div>
        <div>
          <p>All Projects</p>
          <p>Contact</p>
        </div>
    </div>
  );
}

export default Navbar;
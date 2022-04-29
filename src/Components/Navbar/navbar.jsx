import './navbar.scss';
import wave from "../../Images/wave.png"

function Navbar() {
  return (
    <div className="flex justify-between w-100">
      <div className='flex'>
        <img src={wave} alt="wave" className='w-4'/>
        <p> Zainab O.</p>
        </div>
        <div className='flex justify-between w-1/5'>
          <p>All Projects</p>
          <p>Contact</p>
        </div>
    </div>
  );
}

export default Navbar;
import DH from '/public/images/DH.png';
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='foot'>
      {/* <p>Powered by</p> */}
      <div className='footerLogo'>
        <img src={DH} alt="Logo" width="200" height="50" />
      </div>
      <div className='foot-icons'>
        <Link to="https://www.facebook.com/">
          <ImFacebook2 />
        </Link>
        <Link to="https://www.instagram.com/">
          <PiInstagramLogoFill />
        </Link>
        <Link to="https://www.whatsapp.com/">
          <IoLogoWhatsapp />
        </Link>
        <Link to="https://www.whatsapp.com/">
          <AiFillTikTok />
        </Link>
      </div>
    </footer>
  )
}

export default Footer

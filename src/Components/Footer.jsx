import DH from '/public/images/DH.png';
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        {/* <p>Powered by</p> */}
        <img src={ DH } alt="Logo" width="160" height="40" />
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
    </footer>
  )
}

export default Footer

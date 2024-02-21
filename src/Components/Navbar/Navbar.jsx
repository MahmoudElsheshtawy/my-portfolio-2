import { useState } from "react";
import "./Navbar.css";
import logo_tow from "../../photo/logo_tow.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handelNav = () => setNav(!Nav);

  return (
    <>
      <div className="navbar  active">
        <div className="container">
          {/* logo */}
          <a href="#" className="logo">
            <img src={logo_tow} alt="" />
          </a>

          <div
            className={Nav ? "nav-menu active" : "nav-menu"}
            style={{ display: "flex", alignItems: "center" }}
          >
            <ul>
              <li onClick={() => setNav(false)}>
                <a href="#Home">Home</a>
              </li>
              <li onClick={() => setNav(false)}>
                <a href="#About">About Me</a>
              </li>
              <li onClick={() => setNav(false)}>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li onClick={() => setNav(false)}>
                <a href="#Contact Me">Contact Me</a>
              </li>
            </ul>
          </div>

          <div className="hamborger" onClick={handelNav}>
            {Nav ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import "../css/Navbar.css";
import logo from "../image/L1.png";
import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
import { useState } from "react";
const Navbar = () => {
  const style1 = {
    "@media(max-width:900px)": {
      display: "none",
      height: "auto",
    },
  };
  const navbar_left1 = {
    "@media(max-width:900px)": {
      width: "100%",
    },
  };
  const hamburger = {
    "@media(max-width:900px)": {
      display: "block",
    },
  };
  let [myStyle, setStyle] = useState({
    display: "none",
  });
  function ham_burger() {
    if (myStyle.display === "none") {
      setStyle({
        display: "block",
      });
    } else if (myStyle.display === "block") {
      setStyle({
        display: "none",
      });
    }
  }

  return (
    <>
      <StyleRoot>
        <div className="navbar">
          <div className="navbar_left" style={navbar_left1}>
            <div className="logo">
              <img src={logo} alt="Astra Shoes" />
            </div>
            <div className="hamburger" style={hamburger} onClick={ham_burger}>
              <div className="ham1"></div>
              <div className="ham1"></div>
              <div className="ham1"></div>
            </div>
          </div>

          <div className="navbar_right" style={style1}>
            <Link to="/">ASTRA LC</Link>
            <Link to="/all-products">Our products</Link>
            <Link to="/whoweare">Who we are </Link>
            <Link to="/">Outlets</Link>
          </div>
          <div className="hamb" style={myStyle}>
            <div className="mobilenaviga">
              <div className="hamblogo">
                <img src={logo} alt="logo" />
              </div>
              <h2>Astra Leather Company</h2>
              <div className="hambLink">
                <Link to="/" onClick={ham_burger}>
                  Homepage
                </Link>
              </div>
              <div className="hambLink">
                <Link to="/all-products" onClick={ham_burger}>
                  Our Products
                </Link>
              </div>
              <div className="hambLink">
                <Link to="/whoweare" onClick={ham_burger}>
                  Who we are
                </Link>
              </div>
              <div className="hambLink">
                <Link to="/whoweare" onClick={ham_burger}>
                  Our Outlets
                </Link>
              </div>
              <div>
                <button>Shop Now</button>
              </div>
              <div className="foot foot_nav">
                <h4>&#169; &nbsp;2021 - ASTRA LC. ALL Rights Reserved.</h4>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
};

export default Radium(Navbar);

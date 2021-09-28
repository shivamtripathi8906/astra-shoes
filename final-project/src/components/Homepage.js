import h1 from "../image/H1.png";
import T1 from "../image/T1.jpg";
import T2 from "../image/T2.jpg";
import T3 from "../image/T3.jpg";
import S1 from "../image/S1.jpg";
import S2 from "../image/S2.jpg";
// import Whoweare from "./Whoweare";
import "../css/Homepage.css";
import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
const Homepage = () => {
  const style = {
    "@media(max-width:600px)": {
      flexDirection: "column",
      width: "92%",
      padding: "2.8%",
    },
  };
  const photopart = {
    "@media(max-width:600px)": {
      width: "100%",
    },
  };
  const threediv_1 = {
    "@media(max-width:600px)": {
      width: "100%",
      flexDirection: "column",
    },
  };
  const contentpart = {
    "@media(max-width:600px)": {
      width: "100%",
    },
  };
  const homeleft = {
    "@media(max-width:600px)": {
      height: "80vh",
    },
  };
  const homeleft1 = {
    "@media(max-width:600px)": {
      height: "41vh",
    },
  };
  const store1 = {
    "@media(max-width:600px)": {
      flexDirection: "column",
    },
  };
  const store2 = {
    "@media(max-width:600px)": {
      width: "100%",
      marginTop: "2rem",
    },
  };
  const z1 = {
    "@media(max-width:600px)": {
      width: "95%",
    },
  };
  const z2 = {
    "@media(max-width:900px)": {
      fontSize: "1rem",
      height: "2rem",
      fontWeight: "bold",
    },
  };
  return (
    <>
      <StyleRoot>
        <div className="homepage">
          <div className="home" style={homeleft}>
            <Link to="/all-products">
              <div className="home_left">
                <img src={h1} alt="h1" style={homeleft1} />
                <div className="home_right">
                  <p className="home_right2">Back. But better</p>
                  <p className="home_right1">
                    Discover the HTX, a clean take on our high-top silhouette.
                  </p>
                  <p>Click to Explore </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="threediv" style={style}>
            <div className="threediv_1" style={threediv_1}>
              <div className="photo_part" style={photopart}>
                <img src={T1} alt="T1" />
              </div>
              <div className="content_part" style={contentpart}>
                <h5>Modular Packing</h5>

                <p>Unboxing like never before</p>
                <a href="goole.com">Read story &#8594;</a>
              </div>
            </div>
            <div className="threediv_1" style={threediv_1}>
              <div className="photo_part" style={photopart}>
                <img src={T2} alt="T1" />
              </div>
              <div className="content_part" style={contentpart}>
                <h5>Who we are</h5>

                <p>Our journey explained</p>
                <Link to="/whoweare">Read story &#8594;</Link>
              </div>
            </div>
            <div className="threediv_1" style={threediv_1}>
              <div className="photo_part" style={photopart}>
                <img src={T3} alt="T1" />
              </div>
              <div className="content_part" style={contentpart}>
                <h5>How it's made</h5>

                <p>Sneakers made like shoes</p>
                <a href="goole.com">
                  Read story <span>&#8594;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="about">
            <div className="aboutsec">
              <div className="aboutsec2"></div>
              <div className="aboutsec1" style={z2}>
                <p>&nbsp; &nbsp;Astra Leather Company&nbsp; &nbsp;</p>
              </div>
              <div className="aboutsec2"></div>
            </div>
            <div className="about22" style={z1}>
              <p>
                We followed our dream and found ourselves living an
                unforgettable adventure. We are a name that implies moments of
                joy and excitement, a name that means stylistic originality and
                design in any language, there for you to discover in all of its
                many expressions.
              </p>
            </div>
          </div>
          <div className="store" style={store1}>
            <div className="store1" style={store2}>
              <div className="store1_image">
                <a href="www.google.com">
                  <img src={S1} alt="s1" />
                  ASTRA LC Laundry Store
                </a>
                <p>Let us clean your shoes</p>
              </div>
              <div className="store1_content"></div>
            </div>
            <div className="store1" style={store2}>
              <div className="store1_image ">
                <a href="www.google.com">
                  <img src={S2} alt="s2" />
                  Kolkata Flagship Store
                </a>
                <p>Find us at 425 Park Street, Kolkata </p>
              </div>
              <div className="store1_content"></div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
};

export default Radium(Homepage);

import "../css/Footer.css";
import Radium, { StyleRoot } from "radium";
const Footer = () => {
  const F1 = {
    "@media(max-width:900px)": {
      width: "90%",
    },
  };
  const F2 = {
    "@media(max-width:900px)": {
      height: "auto",
      flexDirection: "column",
    },
  };
  const F3 = {
    "@media(max-width:900px)": {
      marginLeft: "0%",
      marginBottom: "2vh",
    },
  };

  return (
    <>
      <div className="footer_main">
        <StyleRoot>
          <div className="footer_sub" style={F2}>
            <div className="footerbox1" style={F1}>
              <h2>Astra LC</h2>
              <p>
                Founded in 2010 in Amsterdam, ETQ derived under the mindset of
                eliminating over-accessorized branding and focusing primarily on
                letting the quality of the product speak for itself.
              </p>
            </div>
            <div className="footerbox2" style={F3}>
              <h3>Find us at:</h3>
              <p> Contact: @admin.com</p>
              <p>Phone: &nbsp;&nbsp;9876543210</p>
            </div>
          </div>
          <div className="foot">
            <h4>&#169; &nbsp;2021 - ASTRA LC. ALL Rights Reserved.</h4>
          </div>
        </StyleRoot>
      </div>
    </>
  );
};

export default Radium(Footer);

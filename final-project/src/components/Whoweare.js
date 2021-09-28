import W1 from "../image/W1.jpg";
import W2 from "../image/W2.png";
import "../css/Whoweare.css";
import W4 from "../image/W4.png";
import Radium, { StyleRoot } from "radium";
const Whoweare = () => {
  const who1 = {
    "@media(max-width:600px)": {
      height: "65vh",
    },
  };
  const who2 = {
    "@media(max-width:600px)": {
      width: "100%",
    },
  };
  const who3 = {
    "@media(max-width:600px)": {
      display: "none",
    },
  };
  return (
    <>
      <StyleRoot>
        <div className="minwhowe">
          <div className="whoweare" style={who1}>
            <img src={W1} alt="" />
            <div className="whoweare1">
              <p className="whoweare1_1">
                Who we are, our journey explained...
              </p>
            </div>
          </div>
          <div className="whoweare_content">
            <div className="who_con1" style={who2}>
              <h5>A constant journey to perfection</h5>
              <p>
                Back in 2010, while working at a local Amsterdam retailer, we
                saw an opening for a different approach to footwear. One that
                breathes luxury and design, but one that is also modest,
                minimalistic and affordable. It turned out to be a promising
                idea. Now, 10 years later, the cliche might be to express how
                fast the time has passed. But the truth is that is has been a
                long and intense road. What started as a small project with
                friends, emerged out of passion and curiosity, turned out to be
                the brand that is now represented at premium retailers in
                Europe’s main capitals.
              </p>
            </div>
            <div className="who_con1" style={who2}>
              <img src={W2} alt="w2" />
            </div>
            <div className="who_con1" style={who2}>
              <h5>It’s not fashion. It’s design.</h5>
              <p>
                The difference between the two, for us, is about change versus
                improvement. Being just different is very simple. Being better
                is difficult, but far more valuable. It’s a constant journey to
                perfection, always questioning our previous wins, always aiming
                to do it better next time. We focus on comfort, durability and
                sustainability; the main pillars in our search for the ultimate
                everyday-sneakers. The theme of each collection is very simple,
                and always will be: SAME BUT BETTER.
              </p>
            </div>
            <div className="who_con1">
              <div className="who_con1" style={(who2, who3)}>
                <img src={W4} alt="w2" />
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
};

export default Radium(Whoweare);

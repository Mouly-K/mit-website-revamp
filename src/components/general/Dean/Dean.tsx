import "./dean.css";
// import DeanImage from "./professor1.png";
// import DeanImage from "./Dean_bgRemoved.png";
import DeanImage from "./dean.png"

function Dean() {
  return (
    <div className="deanMain">
      <div
        className="deanMask"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(82, 95, 225, 0.85)",
          justifyContent: "space-between",
        }}
      >
        <div className="deanContent">
          <div className="deanTitle">
            <span>Limitless Learning, </span>
            <span>Limitless Oppurtunities!</span>
          </div>
          <div className="deanQuote">
            <span>
              <blockquote>
              Madras Institute of Technology (MIT) is a pioneering technological institution in India, satiating the technical thirst of many young aspiring professionals through state-of-the-art facilities, excellence infrastructure, high quality Laboratories and Centres of excellence.  The institute has received generous funding support from various National and International Funding agencies and its administration ultimately provides a stimulating environment conducive to studies and research.
              </blockquote>
            </span>
            <span>Prof. J. Prakash, Dean</span>
          </div>
          <div className="flex-row">
            <button className="more-button">Know More</button>
          </div>
        </div>
        <div className="deanImage">
          <img
            src={DeanImage} />
        </div>
      </div>
    </div>
  );
}

export default Dean;

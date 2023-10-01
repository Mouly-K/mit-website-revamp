import { useState, useEffect } from "react";
import { BiSolidBell } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./banner.css";

// import BannerImage from "../../../assets/banner-student.png";
// import MITFrontGate from "../../../assets/mit-front-gate.jpg";
import MITFrontGate from "../../../assets/mit-front.jpg";
// import Subish from "../../../assets/subsus.png";
// import BookImage from "../../../assets/book.png";
// import ChartImage from "../../../assets/chart.png";
// import ChatImage from "../../../assets/chat.png";
// import AnnaLogo from "../../../assets/anna_logo.png";
import AnnaLogo from "../../../assets/anna_logo_grey.png";

import APIService from "../../../api/Service";

export default function Banner() {
  const [annnouncementCount, setAnnouncementCount] = useState(0);
  const NoOfDays = 5;
  useEffect(() => {
    const body = {
      tag: "getAnnouncementCount",
      param: [NoOfDays],
    };
    APIService.PostData(body, "/DB/Query")
      .then((res: any) => {
        setAnnouncementCount(res?.data[0]?.COUNT);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="banner noselect">
      <div className="left">
        <div className="logo-container">
          <img
            src={AnnaLogo}
            // style={{ height: 100, width: 100, marginBottom: 10, marginTop: -20 }}
            />
        <h1>
          <p>Anna University</p>
        </h1>
        </div>
        <p className="campus-container">Madras Institute of Technology Campus</p>
        <div className="description">
          <p>Established in 1949, by Shri C. Rajam</p>
          <p>Merged in 1978 with Anna University</p>
          <p>A Benchmarked Institution for Engineering and Technology</p>
          <p>with alumni footprints in all domains across the globe</p>
        </div>
        <div className="flex-row">
          <NavLink className="announcements-button" to="/announcements">
            <BiSolidBell size={20} />
            Announcements
          </NavLink>
          {annnouncementCount > 0 && <p>{annnouncementCount} new in last 7 days</p>}
        </div>
      </div>
      <div className="right">
        <img src={MITFrontGate} className="banner-image" />
        {/* <img src={BookImage} className="book-image" />
        <img src={ChartImage} className="chart-image" />
        <img src={ChatImage} className="chat-image" /> */}
      </div>
    </div>
  );
}

import { useState } from "react";
import "./footer.css";

import Dropdown from "../Dropdown/Dropdown";
import { footerContents } from "../../../pages/public/Home/data";
import { NavLink } from "react-router-dom";
import Map from "./Map";
import google from "../../../assets/Google__G__Logo.svg";

export interface FooterContent {
  title: string;
  url: string;
  content?: FooterContent[];
}

function Footer() {
  const location = {
    // 12.948199763058907, 80.13975384299005
    address: "Madras Institute of Technology, Chrompet, Chennai",
    lat: 12.948199763058907,
    lng: 80.13975384299005,
  };

  const handleGoogleClick = () => {
    const url =
      "https://www.google.com/maps/place/Madras+Institute+of+Technology,+Anna+University/@12.9474333,80.1403601,16.73z/data=!4m7!3m6!1s0x3a525fac595c29ff:0xb76082ae18b51418!4b1!8m2!3d12.948048!4d80.139742!16zL20vMDFjczgx?entry=ttu"; // Replace with the desired link
    window.open(url, "_blank");
  };

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="footer-container noselect">
      <span>
        <span>
          <h1>Anna University, MIT Campus</h1>
          <p>dean@mitindia.edu | +044 2251 6002</p>
          <div className="map-contact-container">
            <div className="map-container">
              <Map latitude={location.lat} longitude={location.lng} />
              <div className="google-wrapper" onClick={handleGoogleClick}>
                <img src={google} />
              </div>
            </div>
          </div>
          <div className="copyright">
            © 2023 All Rights Reserved By <a href="#!"> @MIT WebTeam </a>
          </div>
        </span>
      </span>
      <span>
        {footerContents.map((item: FooterContent, index: number) => (
          <span key={`${item}${index}`}>
            <div className="column-title">{item.title}</div>
            <span>
              {item?.content?.map((item: FooterContent, index: number) => (
                <NavLink key={`${item}${index}`} to={item.url} target="_blank">
                  {item.title}
                </NavLink>
              ))}
              {index === footerContents.length - 1 && (
                <div className="dropdown-wrapper-lang">
                  <Dropdown
                    value={selectedLanguage}
                    onChange={setSelectedLanguage}
                    items={["English", "Tamil"]}
                  />
                </div>
              )}
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}

export default Footer;

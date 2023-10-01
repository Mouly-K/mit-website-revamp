// import React from "react";
import "./announcementCards.css";
// import { IoMdShareAlt } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/Hi";
export default function AnnouncementCard(props: any) {
  const processDate = (AnnouncementDate: any) => {
    const date = new Date(AnnouncementDate);
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  };
  return (
    <div
      className="outerContainer"
      onClick={() => {
        window.open(props.data.viewmore, "_blank");
      }}
    >
      <div className="textContainer">
        <div className="HeadConatiner">
          <HiSpeakerphone />
          {props.type && <div className="blinking-div"></div>}
          <div className="title">{props.data.announcementTitle}</div>
          <div className="description">
            Dated {processDate(props.data.announcementDate)}
          </div>
        </div>
      </div>
      {/* <div className="imageContainer">
        {props.data.viewmore && (
          <div
            className="viewmore"
            onClick={() => {
              window.open(props.data.viewmore, "_blank");
            }}
          >
            <IoMdShareAlt />
          </div>
        )}
      </div> */}
    </div>
  );
}

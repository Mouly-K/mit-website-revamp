import { useEffect, useState } from "react";
import AnnouncementCard from "./Card/announcementCard";
import "./announcements.css";
import APIService from "../../../api/Service";
interface Announcement {
  id: number;
  announcementType: string;
  announcementDate: Date;
  viewmore: string;
  description: string;
  announcementTitle: string;
  announcementValidity: Date;
}
interface filteredAnnouncement {
  Active_Announcement: Announcement[];
  Expired_Announcment: Announcement[];
}

export default function Announcements() {
  const [AnnouncemntType, setAnnouncementType] = useState<boolean>(true);
  const [PossibleAnnouncementTypes, setPossibleAnnouncementTypes] = useState<
    string[]
  >([]);
  const [AnnouncementSize, setAnnouncementSize] = useState<boolean>(false);
  const [data, setdata] = useState<filteredAnnouncement>();
  const GetData = () => {
    const body = {
      tag: "getAnnouncement",
      param: "",
    };
    APIService.PostData(body, "/DB/Query")
      .then((res: any) => {
        if (res.success == 1) {
          separateAnnouncements(res?.data);
          setPossibleAnnouncementTypes(getAllAnnouncementTypes(res?.data));
        }
        else {
          console.log(res?.data);
        }
      })
      .catch((error) => console.log(error));
  };

  const getAllAnnouncementTypes = (array: Announcement[]) => {
    const announcementTypes = new Set<string>();
    array.forEach((item) => announcementTypes.add(item.announcementType));
    return Array.from(announcementTypes);
  };

  const FilterAnnouncement = (
    Announcement: Announcement[],
    announcementType: string
  ) => {
    const filteredAnnouncement = Announcement.filter(
      (item) => item.announcementType === announcementType
    );
    if (filteredAnnouncement.length === 0) {
      return [];
    }
    return filteredAnnouncement;
  };
  const separateAnnouncements = (
    array: Announcement[]
  ): { recent: Announcement[]; other: Announcement[] } => {
    const today = new Date();
    const recentAnnouncements: Announcement[] = [];
    const otherAnnouncements: Announcement[] = [];
    array.forEach((item) => {
      const timestamp = new Date(item.announcementValidity);
      if (timestamp >= today) {
        recentAnnouncements.push(item);
      } else {
        otherAnnouncements.push(item);
      }
      if (recentAnnouncements.length > 0 && otherAnnouncements.length > 0) {
        setAnnouncementSize(true);
      } else {
        (recentAnnouncements.length > 0)
          ? setAnnouncementType(true) : setAnnouncementType(false);

      }
      setdata({
        Active_Announcement: recentAnnouncements,
        Expired_Announcment: otherAnnouncements,
      });
      // console.log(typeof(data));
    });
    return { recent: recentAnnouncements, other: otherAnnouncements };
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="anouncementContainer noselect">
      <div className="recentTextContainer">
        {
          AnnouncementSize && (<div className="announcementType">
            <div className={(AnnouncemntType) ? "active" : "passive"} onClick={() => setAnnouncementType(true)}>Active</div>
            <div className={(!AnnouncemntType) ? "active" : "passive"} onClick={() => setAnnouncementType(false)}>Archive </div>
          </div>
          )
        }
        {data && (
          <div className="recentContainer">
            {PossibleAnnouncementTypes.map((announcementType, index) => (
              <div key={index} className="announcementTypeContainer">
                <div className="announcementCardContainer">
                  {FilterAnnouncement(
                    AnnouncemntType ? data.Active_Announcement : data.Expired_Announcment,
                    announcementType
                  ).map(
                    (announcement) =>
                      announcement && (
                        <AnnouncementCard
                          data={announcement}
                          key={announcement.id}
                          type={AnnouncemntType}
                        />
                      )
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

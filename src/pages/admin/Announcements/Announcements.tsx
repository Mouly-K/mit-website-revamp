import { useEffect, useState } from "react";
import "./announcements.css";

import { FileUploader } from "react-drag-drop-files";

import Table from "../../../components/general/Table/Table";
import Filter from "../../../components/general/Filter/Filter";
import HorizontalSelectList from "../../../components/general/HorizontalSelectList/HorizontalSelectList";
import DatePicker from "../../../components/general/DatePicker/DatePicker";
import TextInput from "../../../components/general/TextInput/TextInput";
import { NavLink } from "react-router-dom";
import APIService from "../../../api/Service";

interface AnnouncementInDB {
  id: number;
  announcementType: string;
  viewmore: string;
  announcementDate: Date;
  announcementTitle: string;
  announcementValidity: Date;
}

interface Announcement {
  id: number;
  "Announcement Type": string;
  "Announcement Title": string;
  "Attachment Type": string;
  Attachment: string | File;
  "Validity Date": string;
}

export default function Announcements() {
  useEffect(() => {
    const body = {
      tag: "getAnnouncement",
      param: "",
    };
    APIService.PostData(body, "/DB/Query")
      .then((res: any) => {
        
        if (res.success == 1) {
          setAnnouncements(
            res?.data?.map((announcement: AnnouncementInDB) => ({
              id: announcement.id,
              "Announcement Type": announcement.announcementType,
              "Announcement Title": announcement.announcementTitle,
              "Attachment Type": "link",
              "Annoucement Date": new Date(announcement.announcementDate),
              Attachment: announcement.viewmore,
              "Validity Date": new Date (announcement.announcementValidity)
               
                // Format as "YYYY-MM-DD"
            }))
          );
        } else {
          console.log(res?.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      "Announcement Type": "university",
      "Announcement Title": "Announcement 1",
      "Attachment Type": "link",
      Attachment: "https://google.com",
      "Validity Date": new Date().toJSON(),
    },
    {
      id: 2,
      "Announcement Type": "department",
      "Announcement Title": "Announcement 2",
      "Attachment Type": "link",
      Attachment: "",
      "Validity Date": new Date().toJSON(),
    },
    {
      id: 3,
      "Announcement Type": "university",
      "Announcement Title": "Announcement 3",
      "Attachment Type": "link",
      Attachment: "",
      "Validity Date": new Date().toJSON(),
    },
    {
      id: 4,
      "Announcement Type": "department",
      "Announcement Title": "Announcement 4",
      "Attachment Type": "link",
      Attachment: "",
      "Validity Date": new Date().toJSON(),
    },
  ]);

  return (
    <div className="announcements-app-container">
      <Table
        title="Announcements"
        description="Add, Edit or Remove Announcements"
        modalTitle="Announcement Details"
        modalDescription="View and Edit Announcements"
        canAddItems
        canDeleteItems
        masterData={announcements}
        setMasterData={setAnnouncements}
        renderHead={(filterOptions, filters, setFilters, columnFilters) => (
          <>
            {Object.keys(announcements && announcements[0])?.map(
              (key) =>
                key !== "selected" &&
                (columnFilters["Columns"].length === 0 ||
                  columnFilters["Columns"].includes(key)) && (
                  <th key={key}>
                    <Filter
                      filterLabel={key}
                      options={filterOptions}
                      selectedOptions={filters}
                      setSelectedOptions={setFilters}
                    >
                      {key}
                    </Filter>
                  </th>
                )
            )}
          </>
        )}
        renderBody={(
          item: any,
          index: number,
          onClick: any,
          columnFilters,
          Checkbox: React.ReactNode
        ) => (
          <tr key={index}>
            {Checkbox}
            {Object.keys(item)?.map(
              (key) =>
                key !== "selected" &&
                (columnFilters["Columns"].length === 0 ||
                  columnFilters["Columns"].includes(key)) && (
                  <td onClick={onClick} key={key}>
                    <p>
                      {key === "Validity Date" || key === "Annoucement Date"
                        ? new Date(item[key]).toLocaleString()
                        : item[key]}
                    </p>
                  </td>
                )
            )}
          </tr>
        )}
        renderModalContent={(
          modalData: Announcement,
          setModalData,
          modalEditEnabled
        ) =>
          modalData && (
            <>
              <div className="padded-content">
                <div className="severity-pass-container">
                  <HorizontalSelectList
                    title="Announcement Type"
                    items={["University", "Department"]}
                    selectedItem={modalData["Announcement Type"]}
                    setSelectedItem={(value: string) =>
                      setModalData((oldData: any) => {
                        oldData["Announcement Type"] = value;
                        return { ...oldData };
                      })
                    }
                    enabled={modalEditEnabled}
                  />
                  <DatePicker
                    title="Validity Date"
                    value={
                      modalData["Validity Date"]
                        ? new Date(modalData["Validity Date"])
                        : new Date()
                    }
                    enabled={modalEditEnabled}
                    onChange={(value: any) =>
                      setModalData((oldData: any) => {
                        oldData["Validity Date"] = value.toJSON();
                        return { ...oldData };
                      })
                    }
                  />
                </div>
              </div>
              <div className="padded-content">
                <TextInput
                  title="Announcement Title"
                  type="text"
                  placeholder="Announcement Title"
                  value={modalData["Announcement Title"] || ""}
                  onChange={(value: string) => {
                    setModalData((oldData: any) => {
                      oldData["Announcement Title"] = value;
                      return { ...oldData };
                    });
                  }}
                  errorText={`Invalid ${"Announcement Title"}`}
                  validateWith={(val) => (val === "" ? false : true)}
                  readOnly={!modalEditEnabled}
                />
              </div>
              <div className="padded-content">
                <HorizontalSelectList
                  title="Attachment Type"
                  items={["file", "link"]}
                  selectedItem={modalData["Attachment Type"]}
                  setSelectedItem={(value: string) =>
                    setModalData((oldData: any) => {
                      oldData["Attachment Type"] = value;
                      oldData["Attachment"] = null;
                      return { ...oldData };
                    })
                  }
                  enabled={modalEditEnabled}
                />
              </div>
              <div className="padded-content">
                {modalEditEnabled ? (
                  modalData["Attachment Type"] === "file" ? (
                    <FileUploader
                      handleChange={async (File: any) => {
                        setModalData((oldData: any) => {
                          oldData["Attachment"] = File;
                          return { ...oldData };
                        });
                      }}
                      name="File"
                      types={["csv", "xlsx", "xls"]}
                      dropMessageStyle={{
                        height: 500,
                        backgroundColor: "red",
                      }}
                      style={{ backgroundColor: "orange" }}
                    />
                  ) : (
                    <TextInput
                      title="Link"
                      type="text"
                      placeholder="Link"
                      //@ts-ignore
                      value={modalData["Attachment"] || ""}
                      onChange={(value: string) => {
                        setModalData((oldData: any) => {
                          oldData["Attachment"] = value;
                          return { ...oldData };
                        });
                      }}
                      errorText={`Invalid ${"Link"}`}
                      validateWith={(val) => (val === "" ? false : true)}
                    />
                  )
                ) : (
                  <NavLink
                    //@ts-ignore
                    to={modalData.Attachment}
                    className="view-more-button"
                  >
                    View More
                  </NavLink>
                )}
              </div>
            </>
          )
        }
        handleModalChanges={(modalData: Announcement) => {
          const formData = new FormData();
          formData.append("announcementType", modalData["Announcement Type"]);
          formData.append("announcementTitle", modalData["Announcement Title"]);
          formData.append("announcementValidity", modalData["Validity Date"]);
          if (modalData["Attachment Type"] === "link") {
            formData.append("viewmore", modalData["Attachment"]);
            formData.append("pdfFile", "");
          } else {
            formData.append("viewmore", "");
            formData.append("pdfFile", modalData["Attachment"]);
          }

          APIService.PostFormData(formData, "/user/addAnnouncement").then((res: any) => {
            console.log(res);
            
            if (res?.success === 1) {
              alert("Announcement Added");
            } else {
              alert("Announcement Addition Failed");
            }
          });
        }}
        handleDeleteItems={(newData: Announcement[]) => {
          const ids = newData.map((item: any) => item.id);
          APIService.PostData({ ids: ids }, "/deleteAnnouncements").then(
            (res: any) => {
              if (res?.success === 1) {
                alert("Announcements Deleted");
              } else {
                alert("Announcements Deletion Failed");
              }
            }
          );
        }}
        maxRowsShown={10}
      />
    </div>
  );
}

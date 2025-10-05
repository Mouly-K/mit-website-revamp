import { useState } from "react";
import "./studententry.css";

import HorizontalSelectList from "../../../components/general/HorizontalSelectList/HorizontalSelectList";
import Dropdown from "../../../components/general/Dropdown/Dropdown";
import { departmentsData } from "../../public/Home/data";
import { FileUploader } from "react-drag-drop-files";

import { convertFileToJSON } from "./ExcelToJSON";

import { AiFillCaretDown } from "react-icons/ai";

function StudentEntry() {
  const [fields, setFields] = useState([
    {
      name: "Program",
      horizontal: ["UG", "PG"],
      data: "UG",
    },
    {
      name: "Department",
      dropdown: departmentsData.map((item) => item.name),
      data: "None",
    },
    {
      name: "Student Data",
      uploadFile: true,
      data: null,
    },
  ]);
  const updateFieldData = (index: number, value: any) => {
    setFields((fields) =>
      fields.map((field, i) => {
        if (i === index) {
          return { ...field, data: value };
        }
        return field;
      })
    );
  };

  const [file, setFile] = useState(null);
  const handleChange = async (File: any) => {
    setFile(File);
    console.log(File);
    console.log(file);
    updateFieldData(2, File);
    try {
      const jsonData = await convertFileToJSON(File);
      console.log(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="student-entry-container">
      <div className="entry-fields">
        {fields.map((item, index) => {
          if (item.dropdown) {
            return (
              <div className="cell" key={`${item}${index}`}>
                <div className="left-half">{item.name}:</div>
                <div className="right-half">
                  <div className="dropdown-wrapper">
                    <div className="dropdown-container">
                      <Dropdown
                        options={item.dropdown}
                        selectedOption={item.data}
                        setSelectedOption={(value: string) =>
                          updateFieldData(index, value)
                        }
                      >
                        {item.data}
                      </Dropdown>
                    </div>
                    <div className="down-arrow">
                      <AiFillCaretDown />
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (item.horizontal) {
            return (
              <div className="cell" key={`${item}${index}`}>
                <div className="left-half">{item.name}:</div>
                <div className="right-half">
                  <HorizontalSelectList
                    title={""}
                    items={item.horizontal}
                    selectedItem={item.data}
                    setSelectedItem={(value: string) =>
                      updateFieldData(index, value)
                    }
                    enabled={true}
                  />
                </div>
              </div>
            );
          } else if (item.uploadFile) {
            return (
              <div className="cell" key={`${item}${index}`}>
                <div className="left-half">{item.name}:</div>
                <div className="right-half">
                  <div className="upload-container">
                    <FileUploader
                      handleChange={handleChange}
                      name="File"
                      types={["csv", "xlsx", "xls"]}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="cell">
          <div className="left-half"></div>
          <div className="right-half"></div>
        </div>
      </div>
      <div className="submit-button" onClick={() => console.log(fields)}>
        Submit
      </div>
    </div>
  );
}

export default StudentEntry;

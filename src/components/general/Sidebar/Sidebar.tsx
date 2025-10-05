import React, { useEffect, useState } from "react";

import "./sidebar.css";

interface DataObject {
  name: string;
  element: any;
}

interface SidebarProps {
  data: DataObject[];
  method: Function;
}

const Sidebar: React.FC<SidebarProps> = ({ data, method }) => {
  const [sidebarData, setSidebarData] = useState(() => initialSidebarData());

  function initialSidebarData() {
    return data.map((dataObj, index) => {
      if (index == 0)
        return {
          name: dataObj.name,
          selected: true,
          element: dataObj.element,
        };
      else
        return {
          name: dataObj.name,
          selected: false,
          element: dataObj.element,
        };
    });
  }
  const handleItemClick = (item: string, index: number, obj: any) => {
    method(obj.element);
    const updatedNameObjects = [...sidebarData];
    updatedNameObjects.forEach((key) => {
      key.selected = false;
    });
    updatedNameObjects[index].selected = true;
    setSidebarData(updatedNameObjects);
  };

  return (
    <div className="sidebar">
      <h2 className="index">Index</h2>
      <div className="sidebar-item-container">
        {sidebarData.map((item, index) => (
          <div className="sidebar-item-wrapper" key={index}>
            <div
              className={`sidebar-item${item.selected ? "-selected" : ""}`}
              onClick={() => handleItemClick(item.name, index, item)}
            >
              {item.name}
              {/* {item.selected && item.element} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

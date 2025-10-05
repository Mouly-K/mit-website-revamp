import "./announcementsmenu.css";
import TextInput from "../../components/general/TextInput/TextInput";
import HorizontalSelectList from "../../components/general/HorizontalSelectList/HorizontalSelectList";

function AnnouncementsMenu() {
  var inputStruct = [
    {
      fieldName: "Announcement Type",
      fieldID: "AnnouncementType",
      entry: false,
      selectList: ["University", "Department"],
      required: true,
      data: "",
    },
    {
      fieldName: "Announcement Title",
      fieldID: "AnnouncementTitle",
      entry: true,
      required: true,
      data: "",
    },
    {
      fieldName: "Announcement Validity",
      fieldID: "AnnouncementValidity",
      entry: true,
      required: true,
      data: "",
    },
  ];

  const buttonPress = () => {
    console.log(inputStruct);
  };

  const updateEntry = (index: number, value: any) => {
    inputStruct[index].data = value;
  };

  return (
    <div className="announcements-menu-container">
      {inputStruct.map((item, index) => (
        <div className="field-wrapper" key={`${item}${index}`}>
          <div className="field-name">
            {item.required ? "*" : ""}
            {item.fieldName}:
          </div>
          <div className="field-item">
            {item.entry && (
              // <input
              //   onChange={(e) => updateEntry(index, e.target.value)}
              //   placeholder={item.fieldName}
              // />
              <TextInput
                type="text"
                value={inputStruct[index].data}
                onChange={(e) => updateEntry(index, e)}
                placeholder={item.fieldName}
              />
            )}
            {/* {item.radio && (
              <form action="#" className="radio-form">
                {item.radio.map((item1, index1) => (
                  <label key={`${item1}${index1}`}>
                    <input
                      type="radio"
                      name={item.fieldID}
                      value={item1}
                      onChange={(e) => updateEntry(index, e.target.value)}
                    ></input>
                    {item1}
                  </label>
                ))}
              </form>
            )} */}
            {item.selectList && (
              <div className="select-list">
                <HorizontalSelectList
                  title={"list"}
                  items={item.selectList}
                  selectedItem={"University"}
                  setSelectedItem={function (value: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  enabled={false}
                ></HorizontalSelectList>
              </div>
            )}
          </div>
        </div>
      ))}
      <button
        title="Submit"
        style={{ color: "black" }}
        onClick={buttonPress}
        className="button_sed"
      >
        Submit
      </button>
    </div>
  );
}

export default AnnouncementsMenu;

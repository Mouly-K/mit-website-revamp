import "./staffsidebar.css";
import logo from "../../../../../../assets/anna_logo.png";

interface SSBProps {
  data: any;
  method: any;
  dept: string;
}

function StaffSidebar({ data, method, dept }: SSBProps) {
  console.log(data);

  return (
    <div className="staff-side-bar">
      <div className="logo-wrapper">
        <div className="logo-container">
          <img src={logo} width={"100%"} />
        </div>
        <div className="university-data">
          <div className="dept">Department of {dept}</div>
          <div className="uni">Anna University, MIT Campus</div>
        </div>
      </div>
      {data?.map((item, index) => (
        <div
          key={`${item}${index}`}
          className="staff-side-bar-item"
          onClick={() => {
            method(item.id);
          }}
        >
          <div className="item-icon">{item.icon}</div>

          {item.title}
        </div>
      ))}
    </div>
  );
}

export default StaffSidebar;

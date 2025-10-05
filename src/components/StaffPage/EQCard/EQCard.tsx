import "./eqcard.css";

function EQCard({ data, color, context }) {
  return (
    <div className="inner-box-content eqcard-container">
      {/* <div className="left-column" style={{backgroundColor: context==="eq" && color, width: context==="pe"?150:50, justifyContent: context==="pe" ? 'normal':'center', paddingLeft: context==="pe"?15:0 }}>
        {context==="eq" && data.program}
        {context==="pe" && data.start + " - " + data.end}
        </div>
      <div className="right-column">
        <div className="qualification">
          {context==="eq" && data.program + ". - " + data.course}
          {context==="pe" && data.title}
        </div>
        <div className="university" style={{fontSize: context==="pe"?14:16}}>
          {context==="eq" && data.university}
          {context==="pe" && data.department + ", " + data.university}</div>
      </div> */}

      <div className="degree">
        {context==="eq" && data.program}
        {context==="pe" && data.start+" - "+data.end}
      </div>
      <div className="line-wrapper">
        <div className="line"></div>
      </div>
      <div className="course">
        {context==="eq" && data.course}
        {context==="pe" && data.title}
      </div>
      <div className="university">
        {data.university}
      </div>
    </div>
  );
}

export default EQCard;

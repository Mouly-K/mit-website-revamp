import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { dataObj } from "../../../pages/public/Departments/common/ResearchPublications/PublicationsPage/PublicationsPage";

// export interface dataObj {
//   label: string;
//   Count: number;
// }
interface BGProps {
  dataFetched: dataObj[];
}

export default function BarGraph({dataFetched}: BGProps) {
  
  return (
    <div className="row">
      <div className="col-md-12"></div>

      <div className="section col-md-6">
        <div className="section-content" style={{ width: 800 }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={dataFetched}
              margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
            >
              <XAxis dataKey="label" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Count" fill="maroon" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
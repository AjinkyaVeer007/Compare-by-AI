import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

function GraphicalRepresentation({ data, one, two }) {
  return (
    <div
      style={{ maxHeight: "200vh", height: "500px", width: "100%" }}
      className="graphCard rounded p-4"
    >
      <div className="fs-5 fw-medium mb-2">
        Graphical representaion of features based on 1 to 5 rating
      </div>
      <ResponsiveContainer width="100%" height="95%">
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#fff" }} />
          {/* <YAxis axisLine={false} tick={{ fill: "#fff" }} /> */}
          <Legend />
          <Bar dataKey={one} fill="#e23670" radius={6} />
          <Bar dataKey={two} fill="#2662d9" radius={6} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphicalRepresentation;

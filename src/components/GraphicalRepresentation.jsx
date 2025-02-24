import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GraphicalRepresentation({ data, one, two }) {
  return (
    <div style={{ height: "400px", width: "80%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={one} stroke="#e23670" fill="#e23670" />
          <Area type="monotone" dataKey={two} stroke="#2662d9" fill="#2662d9" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphicalRepresentation;

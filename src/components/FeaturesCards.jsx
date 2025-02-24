import React from "react";

function FeaturesCards({ data }) {
  if (!data) return;

  function camelCaseToNormal(text) {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <div className="row">
      <div className="col-6 p-2">
        <div className="border rounded p-4">
          <div className="row g-2">
            {Object.keys(data).map((feature) => (
              <div key={feature} className="col-6">
                <div
                  className="fw-medium text-secondary"
                  style={{ fontSize: "12px" }}
                >
                  {camelCaseToNormal(feature)}
                </div>
                <div style={{ fontSize: "15px" }}>{data[feature][0]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-6 p-2">
        <div className="border rounded p-4">
          <div className="row g-2">
            {Object.keys(data).map((feature) => (
              <div key={feature} className="col-6">
                <div
                  className="fw-medium text-secondary"
                  style={{ fontSize: "12px" }}
                >
                  {camelCaseToNormal(feature)}
                </div>
                <div style={{ fontSize: "15px" }}>{data[feature][1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCards;

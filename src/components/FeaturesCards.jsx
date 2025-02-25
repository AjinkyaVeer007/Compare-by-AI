import React from "react";

function FeaturesCards({ data, a, b }) {
  if (!data) return;

  function camelCaseToNormal(text) {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <div>
      <div className="featureCard rounded d-flex flex-wrap flex-lg-nowrap flex-md-nowrap justify-content-evenly p-4 gap-4">
        <div className="row g-2">
          <h5 style={{ color: "#f67373" }}>{a}</h5>
          {Object.keys(data).map((feature) => (
            <div key={feature} className="col-12 col-lg-6 col-md-6 p-1">
              <div
                className="fw-medium text-secondary"
                style={{ fontSize: "12px" }}
              >
                {camelCaseToNormal(feature)}
              </div>
              <div style={{ fontSize: "14px" }}>{data[feature][0]}</div>
            </div>
          ))}
        </div>
        <div className="vr d-none d-lg-block d-md-block"></div>
        <div className="row g-2">
          <h5 style={{ color: "#f67373" }}>{b}</h5>
          {Object.keys(data).map((feature) => (
            <div key={feature} className="col-12 col-lg-6 col-md-6 p-1">
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
  );
}

export default FeaturesCards;

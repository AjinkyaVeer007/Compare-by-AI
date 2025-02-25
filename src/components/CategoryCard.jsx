import React from "react";
import { useNavigate } from "react-router";

function CategoryCard({ data, animationdelay }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(data?.navigate)}
      style={{
        width: "300px",
        height: "150px",
        animationDelay: `${animationdelay}ms`,
      }}
      className="categoryCard rounded pointer d-flex justify-content-start align-items-center"
    >
      <h3 className="fw-bold ms-4">{data?.name}</h3>
      <div className="categoryIcon">{data?.icon}</div>
    </div>
  );
}

export default CategoryCard;

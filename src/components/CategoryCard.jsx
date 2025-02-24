import React from "react";
import { useNavigate } from "react-router";

function CategoryCard({ data }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(data?.navigate)}
      style={{ width: "300px", height: "150px" }}
      className="border rounded pointer shadow-sm"
    >
      <div style={{ fontSize: "25px" }} className="fw-bold p-2">
        {data?.name}
      </div>
    </div>
  );
}

export default CategoryCard;

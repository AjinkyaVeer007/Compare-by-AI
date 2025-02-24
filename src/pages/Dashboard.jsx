import React from "react";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../utils/data";

function Dashboard() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 m-3">
        {categories.map((cat) => (
          <CategoryCard key={cat?.name} data={cat} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

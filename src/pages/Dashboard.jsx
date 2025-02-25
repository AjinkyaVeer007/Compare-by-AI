import React from "react";
import CategoryCard from "../components/CategoryCard";
import { Bike, Car, Smartphone } from "lucide-react";
import logo from "../assets/Google_Gemini_logo.svg";

function Dashboard() {
  const categories = [
    {
      name: "Smartphones",
      navigate: "smartphones",
      icon: <Smartphone size={"140px"} />,
    },
    {
      name: "Cars",
      navigate: "cars",
      icon: <Car size={"150px"} />,
    },
    {
      name: "Bikes",
      navigate: "bikes",
      icon: <Bike size={"150px"} />,
    },
  ];
  return (
    <div>
      <div className="text-center text-white p-3">
        <div>Comparison by</div>
        <img src={logo} alt="gemini logo" style={{ height: "80px" }} />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 m-3">
        {categories.map((cat, i) => (
          <CategoryCard key={cat?.name} data={cat} animationdelay={i * 100} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

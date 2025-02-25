import { Trophy } from "lucide-react";
import React from "react";
import logo from "../assets/Google_Gemini_logo.svg";

function WinnerCard({ winner }) {
  return (
    <div className="rounded p-3 winnerCard d-flex flex-wrap justify-content-center align-items-center gap-2 text-white">
      <Trophy className="animeShake" size={"30px"} color="#f67373" />
      <div style={{ color: "#f67373", fontSize: "25px" }} className="fw-bold">
        {winner}
      </div>
      <div>is the winner choosen by</div>
      <img src={logo} alt="gemini logo" style={{ height: "35px" }} />
    </div>
  );
}

export default WinnerCard;

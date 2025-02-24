import React from "react";

function WinnerCard({ winner }) {
  return (
    <div className="border rounded p-3 fw-bold text-center">
      {`${winner} is the winner...!`}
    </div>
  );
}

export default WinnerCard;

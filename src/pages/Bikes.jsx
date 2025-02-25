import React, { useState } from "react";
import Select from "react-select";
import FeaturesCards from "../components/FeaturesCards";
import GraphicalRepresentation from "../components/GraphicalRepresentation";
import { useGraphicalDataModifier } from "../hooks/useGraphicalDataModifier";
import { bikeModel } from "../utils/genAi";
import WinnerCard from "../components/WinnerCard";
import toast from "react-hot-toast";
import { bikeList } from "../utils/bikeData";

function Bikes() {
  const [bike1, setBike1] = useState(null);
  const [bike2, setBike2] = useState(null);
  const [result, setResult] = useState({});
  const [graphicalData, setGraphicalData] = useState([]);

  const graphicalDataModifier = useGraphicalDataModifier();

  const fetchByAI = async () => {
    setResult({});
    setGraphicalData([]);
    try {
      const res = await bikeModel.generateContent(
        `List the features of given two bikes. ${bike1?.value} and ${bike2?.value}`
      );

      let exeutableResponse = JSON.parse(res?.response?.text());

      setResult(exeutableResponse);

      setGraphicalData(
        graphicalDataModifier(
          exeutableResponse?.graphicalData,
          bike1?.value,
          bike2?.value
        )
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="m-3">
      <div className="d-flex justify-content-center align-items-center gap-4 mx-5">
        <Select
          options={bikeList}
          className="w-100"
          value={bike1}
          onChange={(e) => setBike1(e)}
        />
        <Select
          options={bikeList}
          className="w-100"
          value={bike2}
          onChange={(e) => setBike2(e)}
        />
      </div>
      <div className="text-center mt-2">
        <button className="btn btn-primary" onClick={fetchByAI}>
          Generate
        </button>
      </div>
      {result?.comparision && (
        <div className="mt-2">
          <FeaturesCards data={result?.comparision} />
        </div>
      )}
      {result?.graphicalData && (
        <div className="mt-2">
          <GraphicalRepresentation
            data={graphicalData}
            one={bike1?.value}
            two={bike2?.value}
          />
        </div>
      )}
      {result?.winner && (
        <div className="mt-3">
          <WinnerCard winner={result?.winner} />
        </div>
      )}
    </div>
  );
}

export default Bikes;

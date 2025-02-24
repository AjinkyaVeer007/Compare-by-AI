import React, { useState } from "react";
import Select from "react-select";
import { carList } from "../utils/carsData";
import FeaturesCards from "../components/FeaturesCards";
import GraphicalRepresentation from "../components/GraphicalRepresentation";
import { useGraphicalDataModifier } from "../hooks/useGraphicalDataModifier";
import { carModel } from "../utils/genAi";
import WinnerCard from "../components/WinnerCard";
import toast from "react-hot-toast";

function Cars() {
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);
  const [result, setResult] = useState({});
  const [graphicalData, setGraphicalData] = useState([]);

  const graphicalDataModifier = useGraphicalDataModifier();

  const fetchByAI = async () => {
    setResult({});
    setGraphicalData([]);
    try {
      const res = await carModel.generateContent(
        `List the features of given two cars. ${car1?.value} and ${car2?.value}`
      );

      let exeutableResponse = JSON.parse(res?.response?.text());

      setResult(exeutableResponse);

      setGraphicalData(
        graphicalDataModifier(
          exeutableResponse?.graphicalData,
          car1?.value,
          car2?.value
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
          options={carList}
          className="w-100"
          value={car1}
          onChange={(e) => setCar1(e)}
        />
        <Select
          options={carList}
          className="w-100"
          value={car2}
          onChange={(e) => setCar2(e)}
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
            one={car1?.value}
            two={car2?.value}
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

export default Cars;

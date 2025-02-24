import React, { useState } from "react";
import Select from "react-select";
import { smartphoneList } from "../utils/data";
import FeaturesCards from "../components/FeaturesCards";
import GraphicalRepresentation from "../components/GraphicalRepresentation";
import { useGraphicalDataModifier } from "../hooks/useGraphicalDataModifier";
import { smartphoneModel } from "../utils/genAi";
import WinnerCard from "../components/WinnerCard";

function Cars() {
  const [smartphone1, setSmartphone1] = useState(null);
  const [smartphone2, setSmartphone2] = useState(null);
  const [result, setResult] = useState({});
  const [graphicalData, setGraphicalData] = useState([]);

  const graphicalDataModifier = useGraphicalDataModifier();

  const fetchByAI = async () => {
    setResult({});
    setGraphicalData([]);
    const res = await smartphoneModel.generateContent(
      `List the features of given two smartphones. ${smartphone1?.value} and ${smartphone2?.value}`
    );

    let exeutableResponse = JSON.parse(res?.response?.text());

    setResult(exeutableResponse);

    setGraphicalData(
      graphicalDataModifier(
        exeutableResponse?.graphicalData,
        smartphone1?.value,
        smartphone2?.value
      )
    );
  };

  return (
    <div className="m-3">
      <div className="d-flex justify-content-center align-items-center gap-4 mx-5">
        <Select
          options={smartphoneList}
          className="w-100"
          value={smartphone1}
          onChange={(e) => setSmartphone1(e)}
        />
        <Select
          options={smartphoneList}
          className="w-100"
          value={smartphone2}
          onChange={(e) => setSmartphone2(e)}
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
            one={smartphone1?.value}
            two={smartphone2?.value}
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

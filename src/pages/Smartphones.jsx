import React, { useState } from "react";
import Select from "react-select";
import { smartphoneList } from "../utils/smartPhonedata";
import FeaturesCards from "../components/FeaturesCards";
import GraphicalRepresentation from "../components/GraphicalRepresentation";
import { useGraphicalDataModifier } from "../hooks/useGraphicalDataModifier";
import { smartphoneModel } from "../utils/genAi";
import WinnerCard from "../components/WinnerCard";
import { AudioLines } from "lucide-react";
import toast from "react-hot-toast";
import logo from "../assets/Google_Gemini_logo.svg";

function Smartphones() {
  const [smartphone1, setSmartphone1] = useState(null);
  const [smartphone2, setSmartphone2] = useState(null);
  const [result, setResult] = useState({});
  const [graphicalData, setGraphicalData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const graphicalDataModifier = useGraphicalDataModifier();

  const fetchByAI = async () => {
    if (!smartphone1 || !smartphone2)
      return toast.error("Both smartphone must be selected");

    setIsFetching(true);
    setResult({});
    setGraphicalData([]);
    try {
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
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setIsFetching(false);
  };

  return (
    <div className="m-3">
      <div className="row justify-content-center">
        <div
          style={{ backgroundColor: "#1d2840" }}
          className="col-11 col-lg-6 col-md-8 rounded p-4"
        >
          <div className="d-flex justify-content-center flex-wrap flex-lg-nowrap flex-md-nowrap align-items-center gap-4 mb-3">
            <Select
              options={smartphoneList}
              className="w-100 reactSelect"
              value={smartphone1}
              onChange={(e) => setSmartphone1(e)}
              placeholder="Smartphone 1"
            />
            <Select
              options={smartphoneList}
              className="w-100 reactSelect"
              value={smartphone2}
              onChange={(e) => setSmartphone2(e)}
              placeholder="Smartphone 2"
            />
          </div>
          <div className="aiBtn">
            <button disabled={isFetching} onClick={fetchByAI}>
              <div className={isFetching ? "animeShake" : ""}>
                <AudioLines />
              </div>
              <div>Compare by AI</div>
            </button>
          </div>
          {isFetching && (
            <div
              style={{ fontSize: "14px" }}
              className="d-flex justify-content-center flex-wrap gap-2 align-items-end mt-3 text-white"
            >
              <div>Fetching data by</div>
              <img src={logo} alt="gemini logo" style={{ height: "40px" }} />
              <div>Please wait...</div>
            </div>
          )}
        </div>
      </div>
      {result?.winner && (
        <div className="mt-3 mx-lg-3 mx-0">
          <WinnerCard winner={result?.winner} />
        </div>
      )}
      {result?.comparision && (
        <div className="mt-3 mx-lg-3 mx-0">
          <FeaturesCards
            data={result?.comparision}
            a={smartphone1?.value}
            b={smartphone2?.value}
          />
        </div>
      )}
      {result?.graphicalData && (
        <div className="mt-3 mx-lg-3 mx-0">
          <GraphicalRepresentation
            data={graphicalData}
            one={smartphone1?.value}
            two={smartphone2?.value}
          />
        </div>
      )}
    </div>
  );
}

export default Smartphones;

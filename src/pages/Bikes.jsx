import React, { useState } from "react";
import Select from "react-select";
import FeaturesCards from "../components/FeaturesCards";
import GraphicalRepresentation from "../components/GraphicalRepresentation";
import { useGraphicalDataModifier } from "../hooks/useGraphicalDataModifier";
import { bikeModel } from "../utils/genAi";
import WinnerCard from "../components/WinnerCard";
import toast from "react-hot-toast";
import { bikeList } from "../utils/bikeData";
import logo from "../assets/Google_Gemini_logo.svg";
import { AudioLines } from "lucide-react";

function Bikes() {
  const [bike1, setBike1] = useState(null);
  const [bike2, setBike2] = useState(null);
  const [result, setResult] = useState({});
  const [graphicalData, setGraphicalData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const graphicalDataModifier = useGraphicalDataModifier();

  const fetchByAI = async () => {
    if (!bike1 || !bike2) return toast.error("Both bikes must be selected");

    setIsFetching(true);
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
              options={bikeList}
              className="w-100 reactSelect"
              value={bike1}
              onChange={(e) => setBike1(e)}
              placeholder="Bike 1"
            />
            <Select
              options={bikeList}
              className="w-100 reactSelect"
              value={bike2}
              onChange={(e) => setBike2(e)}
              placeholder="Bike 2"
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
            a={bike1?.value}
            b={bike2?.value}
          />
        </div>
      )}
      {result?.graphicalData && (
        <div className="mt-3 mx-lg-3 mx-0">
          <GraphicalRepresentation
            data={graphicalData}
            one={bike1?.value}
            two={bike2?.value}
          />
        </div>
      )}
    </div>
  );
}

export default Bikes;

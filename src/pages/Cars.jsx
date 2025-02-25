import React, { useState } from "react";
import Select from "react-select";
import { carList } from "../utils/carsData";
import FeaturesCards from "../components/FeaturesCards";
import GraphicalRepresentation from "../components/GraphicalRepresentation";
import { useGraphicalDataModifier } from "../hooks/useGraphicalDataModifier";
import { carModel } from "../utils/genAi";
import WinnerCard from "../components/WinnerCard";
import toast from "react-hot-toast";
import logo from "../assets/Google_Gemini_logo.svg";
import { AudioLines } from "lucide-react";

function Cars() {
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);
  const [result, setResult] = useState({});
  const [graphicalData, setGraphicalData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const graphicalDataModifier = useGraphicalDataModifier();

  const fetchByAI = async () => {
    if (!car1 || !car2) return toast.error("Both cars must be selected");

    setIsFetching(true);
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
              options={carList}
              className="w-100 reactSelect"
              value={car1}
              onChange={(e) => setCar1(e)}
              placeholder="Car 1"
            />
            <Select
              options={carList}
              className="w-100 reactSelect"
              value={car2}
              onChange={(e) => setCar2(e)}
              placeholder="Car 2"
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
            a={car1?.value}
            b={car2?.value}
          />
        </div>
      )}
      {result?.graphicalData && (
        <div className="mt-3 mx-lg-3 mx-0">
          <GraphicalRepresentation
            data={graphicalData}
            one={car1?.value}
            two={car2?.value}
          />
        </div>
      )}
    </div>
  );
}

export default Cars;

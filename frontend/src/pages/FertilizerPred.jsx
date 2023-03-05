import axios from "axios";
import React, { useReducer, useState } from "react";
// import LoadingBox from "../components/LoadingBox";
import "./styles/fertilizer.css";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const FertilizerPred = () => {
  const [state, dispatch] = useReducer(dataReducer, { data: null });
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [moisture, setMoisture] = useState(0);
  const [N, setN] = useState(0);
  const [K, setK] = useState(0);
  const [P, setP] = useState(0);

  const crop_array = [
    "barley",
    "cotton",
    "groundnut",
    "maize",
    "millet",
    "oilseeds",
    "paddy",
    "pulses",
    "sugarcane",
    "tobacco",
    "wheat",
  ];
  const soil_array = ["black", "clayey", "loamy", "red", "Sandy"];
  const [cropSelection, setCropSelection] = useState("");
  const [soilSelection, setSoilSelection] = useState("");

  function handleCropChange(selectedCrop) {
    const newCropArray = crop_array.map((crop) =>
      crop === selectedCrop ? 1 : 0
    );
    setCropSelection(newCropArray);
  }

  function handleSoilChange(selectedSoil) {
    const newSoilArray = soil_array.map((soil) =>
      soil === selectedSoil ? 1 : 0
    );
    setSoilSelection(newSoilArray);
  }

  function submitHandler(e) {
    e.preventDefault();
    const data = {
      temperature: temperature,
      humidity: humidity,
      moisture: moisture,
      N: N,
      K: K,
      P: P,
      soil_type: soilSelection,
      crop_name: cropSelection,
    };

    axios
      .post("https://cultivo.pythonanywhere.com/predictf", data)
      .then((response) => {
        dispatch({ type: "SET_DATA", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="form-bag_1">
        <div className="form-container shadow-lg ">
          <div className="strip shadow-lg">
            <div>
              {" "}
              <h2>Fertilizer Prediction</h2>
            </div>
          </div>
          <form className="form-structure " onSubmit={submitHandler}>
            <div className="row">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="N">
                    Nitrogen
                  </label>
                  <input
                    type="number"
                    id="Nitrogen"
                    className="form-control"
                    placeholder="'N'-Value"
                    onChange={(e) => setN(e.target.value)}
                    value={N}
                    step={0.001}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="P">
                    Phosporous
                  </label>
                  <input
                    type="number"
                    id="Phosporous"
                    className="form-control"
                    placeholder="'P'-Value"
                    onChange={(e) => setP(e.target.value)}
                    value={P}
                    step={0.001}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="K">
                    Potassium
                  </label>
                  <input
                    type="number"
                    id="Potassium"
                    className="form-control"
                    placeholder="'K'-Value"
                    onChange={(e) => setK(e.target.value)}
                    value={K}
                    step={0.001}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="Temp">
                    Temprature
                  </label>
                  <input
                    type="number"
                    id="Temprature"
                    className="form-control"
                    placeholder="in Celsius"
                    onChange={(e) => setTemperature(e.target.value)}
                    value={temperature}
                    step={0.001}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="Humidity">
                    Humidity
                  </label>
                  <input
                    type="number"
                    id="Humidity"
                    className="form-control"
                    placeholder=" % of Humidity "
                    onChange={(e) => setHumidity(e.target.value)}
                    value={humidity}
                    step={0.001}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="moist">
                    Moisture
                  </label>
                  <input
                    type="number"
                    id="Moisture"
                    className="form-control"
                    placeholder="Moisture content"
                    onChange={(e) => setMoisture(e.target.value)}
                    value={moisture}
                    step={0.001}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="crop">
                  Select Crop:
                </label>
                <select
                  className="form-control"
                  name="crop"
                  id="crop"
                  onChange={(e) => handleCropChange(e.target.value)}
                >
                  <option value="">Select</option>
                  {crop_array.map((crop) => (
                    <option key={crop} value={crop}>
                      {crop}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col">
                <label className="form-label" htmlFor="soil">
                  Select Soil Type:
                </label>
                <select
                  className="form-control"
                  name="soil"
                  id="soil"
                  onChange={(e) => handleSoilChange(e.target.value)}
                >
                  <option value="">Select</option>
                  {soil_array.map((soil) => (
                    <option key={soil} value={soil}>
                      {soil}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              htmlFor="submit"
              className="btn btn-success btn-block Predict"
            >
              Predict
            </button>
          </form>
        </div>
      </div>

      {state.data && (
        // <div className="mx-8">
        //   <h4 className="my-10 font-Inria">Predicted Fertilizer</h4>
        //   <div>{state.data[0].name}</div>
        //   <div>{state.data[0].description}</div>
        //   <div>
        //     {" "}
        //     <img src={state.data[0].img} alt="" />
        //   </div>
        // </div>
        <section className="output-section">
          <div className="output-image shadow-lg">
            <img className="out-img  " src={state.data[0].img} alt="" />
          </div>

          <div className="output-des">
            <div className="output-Heading">
              Your Soil needs <strong>{state.data[0].name}</strong>
            </div>

            <div className="desciption text-center">
              {state.data[0].description}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FertilizerPred;

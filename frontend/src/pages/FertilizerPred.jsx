import axios from "axios";
import React, { useReducer, useState } from "react";
// import LoadingBox from "../components/LoadingBox";
import "./styles/fertilizer.css";

// const watermelon =
//   "https://drive.google.com/uc?export=view&id=1PnS3BJhRNrkvDxrxyG-uKZWpBC6x1VL6";

const f102626 =
  "https://drive.google.com/uc?export=view&id=1UxugqQIf3rngWKdxIzVX99iqKEJEf3Gi";
const f143514 =
  "https://drive.google.com/uc?export=view&id=101ErFPecO0VhHQooUI3cb-lX4T9WiaEr";
const f171717 =
  "https://drive.google.com/uc?export=view&id=1ZL1uQLZSkGqiiOQ3nYj0fzQQ2OjqWfg";
const f2020 =
  "https://drive.google.com/uc?export=view&id=1vYXYmtESXoygVosXwxqQjOxa0m7ISCoa";
const f2828 =
  "https://drive.google.com/uc?export=view&id=1bdsU8QLCBwK2L9Rr_6102RhXwUqclXlG";
const DAP =
  "https://drive.google.com/uc?export=view&id=11TUhBGVmfGOCvG_UuJ08w36-Ho1Gxei6";
const Urea =
  "https://drive.google.com/uc?export=view&id=1u31aUHmSUxTlEEH6jhlC0QBbS67--jQb";

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
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [moisture, setMoisture] = useState(null);
  const [N, setN] = useState(null);
  const [K, setK] = useState(null);
  const [P, setP] = useState(null);

  //   const [crop_array, setCrop_array] = useState([
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //   ]);
  //   const [soil_array, setSoil_array] = useState([0, 0, 0, 0, 0]);

  // const [crop_array, setCrop_array] = useState([
  //   0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
  // ]);
  // const [soil_array, setSoil_array] = useState([0, 0, 1, 0, 0]);

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
      //   black: black,
      //   clayey: clayey,
      //   loamy: loamy,
      //   red: red,
      //   sandy: sandy,
      //   barley: barley,
      //   cotton: cotton,
      //   groundnut: groundnut,
      //   maize: maize,
      //   millet: millet,
      //   oilseeds: oilseeds,
      //   paddy: paddy,
      //   pulses: pulses,
      //   sugarcane: sugarcane,
      //   tobacco: tobacco,
      //   wheat: wheat,
      soil_type: soilSelection,
      crop_name: cropSelection,
    };

    // const [soil_array, setSoil_array] = useState([]);
    // const [crop_array, setCrop_array] = useState([]);

    axios
      .post("http://127.0.0.1:5000/predictf", data)
      .then((response) => {
        dispatch({ type: "SET_DATA", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // console.log(state.data);

  //   let soil_array = [0, 0, 0, 0, 0];

  //   let crop_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      <section class="form-container shadow-lg ">
        <div class="strip shadow-lg">
          <div>
            {" "}
            <h2>Fertilizer Prediction</h2>
          </div>
        </div>
        <form class="form-structure " onSubmit={submitHandler}>
          <div class="row">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="N">
                  Nitrogen
                </label>
                <input
                  type="number"
                  id="Nitrogen"
                  class="form-control"
                  placeholder="'N'-Value"
                  onChange={(e) => setN(e.target.value)}
                  value={N}
                  step={0.001}
                  required
                />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="P">
                  Phosporous
                </label>
                <input
                  type="number"
                  id="Phosporous"
                  class="form-control"
                  placeholder="'P'-Value"
                  onChange={(e) => setP(e.target.value)}
                  value={P}
                  step={0.001}
                  required
                />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="K">
                  Potassium
                </label>
                <input
                  type="number"
                  id="Potassium"
                  class="form-control"
                  placeholder="'K'-Value"
                  onChange={(e) => setK(e.target.value)}
                  value={K}
                  step={0.001}
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="Temp">
                  Temprature
                </label>
                <input
                  type="number"
                  id="Temprature"
                  class="form-control"
                  placeholder="in Celsius"
                  onChange={(e) => setTemperature(e.target.value)}
                  value={temperature}
                  step={0.001}
                  required
                />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="Humidity">
                  Humidity
                </label>
                <input
                  type="number"
                  id="Humidity"
                  class="form-control"
                  placeholder=" % of Humidity "
                  onChange={(e) => setHumidity(e.target.value)}
                  value={humidity}
                  step={0.001}
                  required
                />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="moist">
                  Moisture
                </label>
                <input
                  type="number"
                  id="Moisture"
                  class="form-control"
                  placeholder="Moisture content"
                  onChange={(e) => setMoisture(e.target.value)}
                  value={moisture}
                  step={0.001}
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              {/* <label for="Soil-type " class="form-label">
                Soil-type
              </label>
              <select
                id="inputState"
                for="soil-type"
                class="form-control"
                onChange={(e) => {
                  handleSoil(e.target.value);
                }}
              >
                <option selected>Choose...</option>
                <option name="soilBlack" value={0}>
                  Black
                </option>
                <option name="soilClayey" value={1}>
                  Clayey
                </option>
                <option name="soilLoamy" value={2}>
                  Loamy
                </option>
                <option name="soilRed" value={3}>
                  Red
                </option>
                <option name="soilSandy" value={4}>
                  Sandy
                </option>
              </select> */}

              <label htmlFor="crop">Select Crop:</label>
              <select
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

            <div class="col">
              {/* <label for="Crop-type" class="form-label">
                Crop-type
              </label>
              <select
                id="inputState"
                for="crop-type"
                class="form-control"
                onChange={(e) => {
                  handleCrop(e.target.value);
                }}
              >
                <option selected>Choose...</option>
                <option value={0}>Barley</option>
                <option value={1}>Cotton</option>
                <option value={2}>Ground-Nut</option>
                <option value={3}>Maize</option>
                <option value={4}>Millet</option>
                <option value={5}>Oil-seeds</option>
                <option value={6}>Paddy</option>
                <option value={7}>Pulses</option>
                <option value={8}>Sugarcane</option>
                <option value={9}>Tabacco</option>
                <option value={10}>Wheat</option>
              </select> */}

              <label htmlFor="soil">Select Soil Type:</label>
              <select
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
            for="submit"
            class="btn btn-success btn-block Predict"
          >
            Predict
          </button>
        </form>
      </section>
      {state.data && (
        <div className="mx-8">
          <h4 className="my-10 font-Inria">Predicted Fertilizer</h4>
          <div>{state.data[0].name}</div>
          <div>{state.data[0].description}</div>
          <div>
            {" "}
            <img src={state.data[0].name} alt="" />
          </div>
          {/* <AlternativeCrops data={state.data.context.main} />
            <h4 className='my-10 font-Inria'>Alternative Suitable Crops</h4>
            <AlternativeCrops data={state.data.context.alternative} /> */}
        </div>
      )}
    </>
  );
};

export default FertilizerPred;

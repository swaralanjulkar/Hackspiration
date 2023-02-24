import axios from "axios";
import React, { useReducer, useState } from "react";
import "./styles/croppred.css";

// const watermelon =
//   "https://drive.google.com/uc?export=view&id=1PnS3BJhRNrkvDxrxyG-uKZWpBC6x1VL6";

// const apple =
//   "https://drive.google.com/uc?export=view&id=14WG7biXxbXLr7boibdARie5ZyoROaYjs";
// const banana =
//   "https://drive.google.com/uc?export=view&id=1dNwmwevkerTI2k6keErFMHGWMA7UtY5u";
// const balckgram =
//   "https://drive.google.com/uc?export=view&id=1LQ9n4Haet5jL9OOwvQEa-l054ROdFI1e";
// const chickpea =
//   "https://drive.google.com/uc?export=view&id=1yVoVqUEhVfYyOKIq2wzK5lW4rL8r7jGQ";
// const coconut =
//   "https://drive.google.com/uc?export=view&id=1fR0M6XgVdGnuWYALqlhRNfXNVFYsSe97";
// const coffee =
//   "https://drive.google.com/uc?export=view&id=1n0S3MzU3aaJjvtVTvGbXB99CHKB5qxpz";
// const cotton =
//   "https://drive.google.com/uc?export=view&id=14tEnklftOJgMtfh2pvYPq2bio5OMXzYQ";
// const grapes =
//   "https://drive.google.com/uc?export=view&id=1Buesauc5QNn2BMyLdVJu9r6yVz-x_0HY";
// const jute =
//   "https://drive.google.com/uc?export=view&id=1Buesauc5QNn2BMyLdVJu9r6yVz-x_0HY";
// const kidneybeans =
//   "https://drive.google.com/uc?export=view&id=1ukODGQ_KFMxCM-BWgZ92VWOy8UgfjyVU";
// const lentil =
//   "https://drive.google.com/uc?export=view&id=1ApscM8NgLISBKzDBaeVxsvv8m8SmtOiU";
// const maize =
//   "https://drive.google.com/uc?export=view&id=1n1--ddZsn_MdQ6wMAWxfPcrH-X27eS6K";
// const mango =
//   "https://drive.google.com/uc?export=view&id=10lAGNhxsmu4zgny3-4ePANMi7cSasuqY";
// const mongbeans =
//   "https://drive.google.com/uc?export=view&id=1A9MDnHhAkfh6Vc2kU-ee0jwpWazGVe38";
// const mothbeans =
//   "https://drive.google.com/uc?export=view&id=1muQnurpsJ5XQiuJaPcvJRYRcXgWroJ1-";
// const muskmelon =
//   "https://drive.google.com/uc?export=view&id=1QJyGB7ypkLsfKwrdj95F7TLeFYvGnpYQ";
// const orange =
//   "https://drive.google.com/uc?export=view&id=1JwOyIQCtpJhP3u1GZCgwq-dLwcLPY-X0";
// const papaya =
//   "https://drive.google.com/uc?export=view&id=1ZiMpEfPUiqyIayMQo1d2Tc0O7PsXXWB0";
// const pigeon_peas =
//   "https://drive.google.com/uc?export=view&id=1eaYxYzi2Y3ntOhMROT9WP-kjjUlKaYKY";
// const pomogranate =
//   "https://drive.google.com/uc?export=view&id=1Kzhvam9Ge5P8RWX5vYDVgODtmdLNwe5z";
// const rice =
//   "https://drive.google.com/uc?export=view&id=1l6cB0CjXd1LF9QevgTLsrxG3ex8JxS_D";
// const watermelon =
//   "https://drive.google.com/uc?export=view&id=1PnS3BJhRNrkvDxrxyG-uKZWpBC6x1VL6";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const CropPred = () => {
  const [state, dispatch] = useReducer(dataReducer, { data: null });
  const [N, setN] = useState(0);
  const [P, setP] = useState(0);
  const [K, setK] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [ph, setPH] = useState(0);
  const [rainfall, setRainfall] = useState(0);

  function submitHandler(e) {
    e.preventDefault();
    const data = {
      N: N,
      P: P,
      K: K,
      temperature: temperature,
      humidity: humidity,
      ph: ph,
      rainfall: rainfall,
    };

    axios
      .post("https://cultivo.pythonanywhere.com/predict", data)
      .then((response) => {
        dispatch({ type: "SET_DATA", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="form-bag">
        <div className="form-container shadow-lg ">
          <div className="strip shadow-lg">
            <div>
              {" "}
              <h2>CROP PREDICTION</h2>
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
                    name="N"
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
                    name="P"
                    onChange={(e) => setP(e.target.value)}
                    value={P}
                    step={0.001}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="k">
                    Potassium
                  </label>
                  <input
                    type="number"
                    id="Potassium"
                    className="form-control"
                    placeholder="'K'-Value"
                    name="K"
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
                    id="Nitrogen"
                    className="form-control"
                    placeholder="in Celsius"
                    name="temperature"
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
                    id="Potassium"
                    className="form-control"
                    placeholder=" % of Humidity "
                    name="humidity"
                    onChange={(e) => setHumidity(e.target.value)}
                    value={humidity}
                    step={0.001}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="pH">
                    pH-value
                  </label>
                  <input
                    type="number"
                    id="Phosporous"
                    className="form-control"
                    placeholder="ph-Value"
                    name="ph"
                    onChange={(e) => setPH(e.target.value)}
                    value={ph}
                    step={0.001}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="Rain">
                    Rainfall
                  </label>
                  <input
                    type="number"
                    id="Nitrogen"
                    className="form-control rainfall"
                    placeholder=" in Millimeter"
                    name="rainfall"
                    onChange={(e) => setRainfall(e.target.value)}
                    value={rainfall}
                    step={0.001}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-success btn-block Predict">
              Predict
            </button>
          </form>
        </div>
      </div>

      {state.data && (
        <section className="output-section">
          <div className="output-image shadow-lg">
            <img className="out-img  " src={state.data.context.img} alt="" />
          </div>

          <div className="output-des">
            <div className="output-Heading">
              Dear Farmking! Your Predicted Crop is{" "}
              <strong>{state.data.context.name}</strong>
            </div>

            <div className="desciption text-center">
              {state.data.context.description}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CropPred;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/weather.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Weather = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        console.log("Latitude is:", lat);
        console.log("Longitude is:", lon);
      });
      const url = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=43ecf2c26620fb2a1cd71000ada8ffd6`;

      console.log(url);

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=43ecf2c26620fb2a1cd71000ada8ffd6`
        )
        .then((response) => {
          // handle successful response
          setWeatherData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    fetchWeatherData();

    

  }, [lat, lon]);

  return (
    <>
    {weatherData && (<section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard
              className="bg-dark text-white"
              style={{ borderRadius: "40px" }}
            >
              <div className="bg-image" style={{ borderRadius: "35px" }}>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                  className="card-img"
                  alt="weather"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                ></div>
              </div>
              <div className="card-img-overlay text-dark p-5">
                <MDBTypography tag="h4" className="mb-0">
                  {weatherData.name}, {weatherData.sys.country}
                </MDBTypography>
                <p className="display-2 my-3">{weatherData.main.temp}</p>
                  <p className="mb-2">
                  Feels Like: <strong>{weatherData.main.feels_like}</strong>
                  </p>
                  <p className="mb-2">
                  Max: <strong>{weatherData.main.temp_max}</strong>
                  </p>
                  <p className="mb-2">
                  Min: <strong>{weatherData.main.temp_min}</strong>
                  </p>
                  <p className="mb-2">
                  Humidity: <strong>{weatherData.main.humidity}</strong>
                  </p>
                  {/* Feels Like: <strong>{weatherData.main.feels_like}</strong>
                  Feels Like: <strong>{weatherData.main.feels_like}</strong> */}
                <MDBTypography tag="h3">{weatherData.weather[0].main}</MDBTypography>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>)}
    </>
  );
};

export default Weather;

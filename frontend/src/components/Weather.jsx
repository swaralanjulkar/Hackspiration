import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/weather.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  // MDBTypography,
} from "mdb-react-ui-kit";

const Weather = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null)

  useEffect(() => {
    const fetchWeatherData = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        console.log("Latitude is:", lat);
        console.log("Longitude is:", lon);
      });

      const API_key = "43ecf2c26620fb2a1cd71000ada8ffd6";
      // const API_key = process.env.REACT_APP_API_KEY;

      const todayurl = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${API_key}`;

      console.log(todayurl);

      lat && city &&
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
      axios
        .get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
        )

        .then((res) => {
          setCity(res.data.city);
        });
    };
    fetchWeatherData();
  }, [lat, lon, city]);

  return (
    <>
      {weatherData && (
        <MDBContainer
          className="w-100 mr-0"
          style={{ position: "absolute", right: "0", top: "4.5vh", zIndex: "200" }}
        >
          {/* <MDBRow
          className="justify-content-center align-items-center h-100"
          style={{ color: "#282828" }}
        >
          <MDBCol md="9" lg="7" xl="5"> */}
          <MDBCard
            className="mb-4 gradient-custom"
            style={{
              backgroundColor: "transparent",
              border: "none",
              width: "40%",
              marginLeft: "auto",
            }}
          >
            <MDBCardBody className="p-4">
              <div className="d-flex justify-content-between pb-2">
                <div>
                  <h2 className="display-2">
                    <strong>{weatherData.main.temp} °c</strong>
                  </h2>
                  <p className="text-muted mb-0">
                    {city}, {weatherData.sys.country}
                  </p>
                </div>
                <div></div>
              </div>
            </MDBCardBody>
          </MDBCard>
          {/* </MDBCol>
        </MDBRow> */}
        </MDBContainer>
      )}
    </>
  );
};

export default Weather;

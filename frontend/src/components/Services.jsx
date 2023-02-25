import React from "react";
import "./styles/services.css";
import cropImg from "./images/crop-img.webp";
// import disImg from "./images/dis-img.jpg";
import anly from "./images/analy-img.webp";
import ferti from "./images/freti-img.jpg";
import gov from "./images/Gov-img.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="Our-Services shadow" id="service-com">
        <div className="Heading-services">
          <h3>What We Do</h3>
          <h1>SERVICES WE OFFER</h1>
        </div>
        <div className="Service-block">
          <div className="card  shadow-lg">
            <img className="card-img-top" src={anly} alt="Card" />
            <div className="card-body">
              <h5>Crop Analytics</h5>
              <p className="card-text">
                "A smarter way to grow: Forecast, plan, and reap rewards!"
              </p>
              <button
                type="submit"
                htmlFor="submit"
                className="btn btn-dark btn-block Show"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  // target="_blank"
                  to="/priceforecast"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>
          <div className="card  shadow-lg">
            <img className="card-img-top " src={ferti} alt="Card" />
            <div className="card-body">
              <h5>Fertilizer Prediction</h5>
              <p className="card-text">
                "Grow your success with precision fertilizer prediction."
              </p>
              <button
                type="submit"
                htmlFor="submit"
                className="btn btn-dark btn-block Show"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  // target="_blank"
                  to="/fertilizerPred"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>
          {/* <Link to="/CropPred"> */}
          <div className="card shadow-lg ">
            <img className="card-img-top" src={cropImg} alt="Card" />
            <div className="card-body">
              <h5>Crop Prediction</h5>
              <p className="card-text">
                "The power to predict your harvest is just a click away"
              </p>
              <button
                type="submit"
                htmlFor="submit"
                className="btn btn-dark btn-block Show"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  // target="_blank"
                  to="/CropPred"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>
          <div className="card shadow-lg">
            <img className="card-img-top" src={gov} alt="Card" />
            <div className="card-body">
              <h5>Government Schemes</h5>
              <p className="card-text">
                "Explore the Schemes Offered by Government."
              </p>
              <button
                type="submit"
                htmlFor="submit"
                className="btn btn-dark btn-block Show"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  to="https://agricoop.nic.in/en/Acts#gsc.tab=0"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

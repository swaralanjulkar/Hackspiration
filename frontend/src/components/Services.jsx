import React from "react";
import "./styles/services.css";
import cropImg from "./images/crop-img.webp";
import disImg from "./images/dis-img.jpg";
import anly from "./images/analy-img.webp";
import ferti from "./images/freti-img.jpg";
import gov from "./images/Gov-img.jpg";

const Services = () => {
  return (
    <>
      <section className="Our-Services shadow-lg">
        <h2>Our Services</h2>
        <div className="Service-block">
          <div className="card  shadow-lg">
            <img className="card-img-top" src={anly} alt="Card image cap"></img>
            <div className="card-body">
              <h5>Crop Analytics</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="submit"
                htmlFor="submit"
                class="btn btn-dark btn-block Show"
              >
                Show More
              </button>
            </div>
          </div>
          <div className="card  shadow-lg middle">
            <img
              className="card-img-top "
              src={ferti}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5>Fertilizer Prediction</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="submit"
                htmlFor="submit"
                class="btn btn-dark btn-block Show"
              >
                Show More
              </button>
            </div>
          </div>
          <div className="card shadow-lg middle">
            <img
              className="card-img-top"
              src={cropImg}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5>Crop Prediction</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="submit"
                htmlFor="submit"
                className="btn btn-dark btn-block Show"
              >
                Show More
              </button>
            </div>
          </div>
          {/* <div class="card shadow-lg">
            <img
              className="card-img-top"
              src={disImg}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5>Disease Prediction</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="submit"
                htmlFor="submit"
                class="btn btn-dark btn-block Show"
              >
                Show More
              </button>
            </div>
          </div> */}
          <div className="card shadow-lg">
            <img className="card-img-top" src={gov} alt="Card image cap"></img>
            <div className="card-body">
              <h5>Government Schemes</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="submit"
                htmlFor="submit"
                className="btn btn-dark btn-block Show"
              >
                Show More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

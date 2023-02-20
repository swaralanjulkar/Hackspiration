import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


const Testimonials = () => {
  return (
    <>
    <MDBContainer
      fluid
      className="py-5"
      style={{ backgroundColor: "#f3f2f2", color: "#000" }}
    >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="fw-bold mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard>
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                />
              </div>
              <h5 className="font-weight-bold">Teresa May</h5>
              <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center"
              >
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star-half-alt" size="sm" color="info" />
                </li>
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard>
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                />
              </div>
              <h5 className="font-weight-bold">Maggie McLoan</h5>
              <h6 className="font-weight-bold my-3">
                Photographer at Studio LA
              </h6>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center"
              >
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Autem, totam debitis suscipit saepe sapiente magnam officiis
                quaerat necessitatibus odio assumenda perferendis labore
                laboriosam.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard>
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                />
              </div>
              <h5 className="font-weight-bold">Alexa Horwitz</h5>
              <h6 className="font-weight-bold my-3">
                Front-end Developer in NY
              </h6>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center"
              >
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon far icon="star" size="sm" color="info" />
                </li>
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Cras sit amet nibh libero, in gravida nulla metus scelerisque
                ante sollicitudin commodo cras purus odio, vestibulum in tempus
                viverra turpis.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    </>
  )
}

export default Testimonials

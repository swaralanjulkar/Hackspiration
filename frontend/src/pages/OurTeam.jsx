import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./styles/ourteam.css";
import sw from '../components/images/swaranjali.jpg'
import jy from '../components/images/jayesh.jpg'
import ac from '../components/images/ayush.jpg'
import sm from '../components/images/srujan.jpg'
import { AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";

const OurTeam = () => {
  // const teamDetails = [
  //   {
  //     name: "Jayesh Pandav",
  //     linkedin: "https://www.linkedin.com/in/jayesh-pandav-68368922a/",
  //     img: "https://drive.google.com/uc?export=view&id=1OX1tkS6JPrXpUSeAnyj910IRq6pjY3Wj",
  //   },
  //   {
  //     name: "Himanshu Sangshetti",
  //     linkedin: "https://www.linkedin.com/in/himanshu-sangshetti-43b42122a/",
  //     img: "https://drive.google.com/uc?export=view&id=1On_mORKDKxxfJ6uC8xNKCfcDTomR-Zu4",
  //   },
  //   {
  //     name: "Prasad Khatake",
  //     linkedin: "https://www.linkedin.com/in/prasad-khatake/",
  //     img: "https://drive.google.com/uc?export=view&id=1O3gHn7M3ZWG8iu2qA4a-rVaBEHL9aCfj",
  //   },
  //   {
  //     name: "Riya Wani",
  //     linkedin: "https://www.linkedin.com/in/riya-wani-114672229/",
  //     img: "https://drive.google.com/uc?export=view&id=1E5oMxFcIsVzvHVH_xYjJi5sh7KhzwjxZ",
  //   },
  //   {
  //     name: "Tanmay Karale",
  //     linkedin: "https://www.linkedin.com/in/tanmay-karale-73b09422a/",
  //     img: "https://drive.google.com/uc?export=view&id=1DFTAwmYqilicDkn9b_5oqCnnh5xOcI-G",
  //   },
  //   {
  //     name: "Ankit Patne",
  //     linkedin: "https://www.linkedin.com/in/ankitpatne/",
  //     img: "https://drive.google.com/uc?export=view&id=1T8TwhJaA0eJ0g_ZZhRDR3tlMkmgbLlPg",
  //   },

  //   {
  //     name: "Abhishek Jadhav",
  //     linkedin: "https://www.linkedin.com/in/abhishekjadhav2002/",
  //     img: "https://media.licdn.com/dms/image/C4D03AQG1_bPw62Iybg/profile-displayphoto-shrink_100_100/0/1616989698001?e=1676505600&v=beta&t=hU22ioqslPCCixnKgVVYpFN6JuH01zBPRHD2A4RQT3c",
  //   },
  //   {
  //     name: "Vansh Teppalwar",
  //     linkedin: "https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/",
  //     img: "https://drive.google.com/uc?export=view&id=1TTQpkgE8cHJhFQFEbjNK_SgHpmNYgsug",
  //   },

  //   {
  //     name: "Gaurav Somani",
  //     linkedin: "https://www.linkedin.com/in/gaurav-somani-294233218/",
  //     img: "https://drive.google.com/uc?export=view&id=1qTiXSczCDgmH__muefFEAxkrKcXMIvno",
  //   },
  //   {
  //     name: "Yash Pande",
  //     linkedin: "https://www.linkedin.com/in/yash-pande-1a5812206/",
  //     img: "https://drive.google.com/uc?export=view&id=1S-J9q8YouV0yKQE7UFGxtkfPM7AwyQWD",
  //   },
  // ];

  return (
    <>
      {/* <div className="web-team w-full min-h-screen">
        <div className="textcheck">
          <h1 className="shop-title mb-12">
            <span>Web</span>-Team
          </h1>
        </div>

        <div className="web-team-main flex justify-evenly flex-wrap w-full xl:w-4/5 xl:mx-auto">
          {teamDetails.map((member, i) => (
            <div
              key={`member${i}`}
              className="w-[250px] transition-all p-3 hover:bg-blue-300 hover:bg-opacity-20 inline-block m-6 cursor-pointer rounded-xl "
            >
              <Link to={member.linkedin} target="_blank" rel="noreferrer">
                <div className="h-[200px] w-[200px] ml-2">
                  <img
                    className="max-h-full max-w-full rounded-full h-[450px] w-[450px] object-contain"
                    src={member.img}
                    alt="smart boy"
                    loading="lazy"
                  />
                </div>
                <div>
                  <br />
                  <p className="text-white text-center bg-h-14 bg-gradient-to-r from-blue-500 to-cyan-500 p-text-white text-allign:center bg-neutral-500 w-200 py-5 px-8 rounded-2xl font-bold  cursor-pointer   ">
                    {member.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div> */}
      
     
     
    <div id="doctors" className="doctors">
      <div className="container">

        <div className="section-title">
          <h2>TEAM MEMBERS</h2>
        </div>


        <div className="row">

          <div className="col-lg-6">
            <div className="member shadow-lg d-flex align-items-start">
              <div className="pic"><img src={sw} className="img-fluid" alt=""/></div>
              <div className="member-info ">
                <h4>Swaranjali Lanjulkar</h4>
                <span>ML Developer</span>
                <p>PICT SE [IT]</p>
                <div className="social">
                  <Link to="https://twitter.com/Swara_Lanjulkar"><i><AiFillTwitterCircle/></i></Link>
                  <Link to="mailto:swaranjalilanjulkar2012@gmail.com"><i><AiOutlineMail/></i></Link>
                  <Link to="https://www.linkedin.com/in/swaranjali-lanjulkar-22548122a/"> <i><AiFillLinkedin/></i> </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member shadow-lg d-flex align-items-start">
              <div className="pic"><img src={jy} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Jayesh Pandav</h4>
                <span>Full Stack Web-Developer</span>
                <p>PICT SE [ENTC]</p>
                <div className="social">
                  <Link to="https://twitter.com/JayeshPandav02"><i className="ri-twitter-fill"><AiFillTwitterCircle/></i></Link>
                  <Link to="mailto:jayeshpandav02@gmail.com"><i className="ri-google-fill"><AiOutlineMail/></i></Link>
                  <Link to="https://www.linkedin.com/in/jayesh-pandav-68368922a/"> <i className="ri-linkedin-box-fill"><AiFillLinkedin/></i> </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member shadow-lg d-flex align-items-start">
              <div className="pic"><img src={ac} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Ayush Chopade</h4>
                <span>Backend Web-Developer</span>
                <p>PICT SE [IT]</p>
                <div className="social">
                <Link to="https://twitter.com/ayusshh_45?t=GUJSOR0MQHe4ziLWD_sTjQ&s=08"><i className="ri-twitter-fill"><AiFillTwitterCircle/></i></Link>
                  <Link to="mailto:ayushchopade45@gmail.com"><i className="ri-google-fill"><AiOutlineMail/></i></Link>
                  <Link to="https://www.linkedin.com/in/ayush-chopade-a04b9a24b"> <i className="ri-linkedin-box-fill"><AiFillLinkedin/></i> </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member shadow-lg d-flex align-items-start">
              <div className="pic"><img src={sm} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Srujan Mukund</h4>
                <span>Frontend Web-Developer</span>
                <p>PICT SE [CE]</p>
                <div className="social">
                <Link to="https://twitter.com/SrujanMukund246?t=ze9PxW3E6JouwuEdBTxFuw&s=08"><i className="ri-twitter-fill"><AiFillTwitterCircle/></i></Link>
                  <Link to="mailto:srujanmukund10@gmail.com"><i className="ri-google-fill"><AiOutlineMail/></i></Link>
                  <Link to="https://www.linkedin.com/in/srujan-mukund"> <i className="ri-linkedin-box-fill"><AiFillLinkedin/></i> </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>




    </>
  );
};

export default OurTeam;

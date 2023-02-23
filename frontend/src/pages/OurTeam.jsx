import React from "react";
import { Link } from "react-router-dom";

const OurTeam = () => {
  const teamDetails = [
    {
      name: "Jayesh Pandav",
      linkedin: "https://www.linkedin.com/in/jayesh-pandav-68368922a/",
      img: "https://drive.google.com/uc?export=view&id=1OX1tkS6JPrXpUSeAnyj910IRq6pjY3Wj",
    },
    {
      name: "Himanshu Sangshetti",
      linkedin: "https://www.linkedin.com/in/himanshu-sangshetti-43b42122a/",
      img: "https://drive.google.com/uc?export=view&id=1On_mORKDKxxfJ6uC8xNKCfcDTomR-Zu4",
    },
    {
      name: "Prasad Khatake",
      linkedin: "https://www.linkedin.com/in/prasad-khatake/",
      img: "https://drive.google.com/uc?export=view&id=1O3gHn7M3ZWG8iu2qA4a-rVaBEHL9aCfj",
    },
    {
      name: "Riya Wani",
      linkedin: "https://www.linkedin.com/in/riya-wani-114672229/",
      img: "https://drive.google.com/uc?export=view&id=1E5oMxFcIsVzvHVH_xYjJi5sh7KhzwjxZ",
    },
    {
      name: "Tanmay Karale",
      linkedin: "https://www.linkedin.com/in/tanmay-karale-73b09422a/",
      img: "https://drive.google.com/uc?export=view&id=1DFTAwmYqilicDkn9b_5oqCnnh5xOcI-G",
    },
    {
      name: "Ankit Patne",
      linkedin: "https://www.linkedin.com/in/ankitpatne/",
      img: "https://drive.google.com/uc?export=view&id=1T8TwhJaA0eJ0g_ZZhRDR3tlMkmgbLlPg",
    },

    {
      name: "Abhishek Jadhav",
      linkedin: "https://www.linkedin.com/in/abhishekjadhav2002/",
      img: "https://media.licdn.com/dms/image/C4D03AQG1_bPw62Iybg/profile-displayphoto-shrink_100_100/0/1616989698001?e=1676505600&v=beta&t=hU22ioqslPCCixnKgVVYpFN6JuH01zBPRHD2A4RQT3c",
    },
    {
      name: "Vansh Teppalwar",
      linkedin: "https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/",
      img: "https://drive.google.com/uc?export=view&id=1TTQpkgE8cHJhFQFEbjNK_SgHpmNYgsug",
    },

    {
      name: "Gaurav Somani",
      linkedin: "https://www.linkedin.com/in/gaurav-somani-294233218/",
      img: "https://drive.google.com/uc?export=view&id=1qTiXSczCDgmH__muefFEAxkrKcXMIvno",
    },
    {
      name: "Yash Pande",
      linkedin: "https://www.linkedin.com/in/yash-pande-1a5812206/",
      img: "https://drive.google.com/uc?export=view&id=1S-J9q8YouV0yKQE7UFGxtkfPM7AwyQWD",
    },
  ];

  return (
    <>
      <div className="elements">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="web-team w-full min-h-screen">
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
      </div>
    </>
  );
};

export default OurTeam;

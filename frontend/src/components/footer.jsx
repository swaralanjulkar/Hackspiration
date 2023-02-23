import React from "react";
import { Link } from "react-router-dom";
import OurTeam from "../pages/OurTeam";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>@ Cultivo All Rights Reseverd</p>
      <div className="small">
        <Link to={OurTeam}>our team</Link>
      </div>
    </div>
  );
};

export default Footer;

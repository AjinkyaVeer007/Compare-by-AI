import React from "react";
import logo from "../assets/Google_Gemini_logo.svg";
import { Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundColor: "#1d2840" }}
      className="px-5 pb-3 pt-2 d-flex justify-content-between align-items-center"
    >
      <img
        src={logo}
        alt="gemini logo"
        style={{ height: "40px" }}
        onClick={() => navigate("/")}
      />
      <div className="d-flex gap-3 align-items-center">
        <a href="https://github.com/AjinkyaVeer007" target="blank">
          <Github color="#fff" />
        </a>
        <a
          href="https://www.linkedin.com/in/ajinkya-veer-0ba100238/"
          target="blank"
        >
          <Linkedin color="#fff" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

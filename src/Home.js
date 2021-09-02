import React from "react";
import { NavLink } from "react-router-dom";
import HomeImage from "../src/Comp/Images/img_home.jpg";
import Common from "./Common";

const Home = () => {
  const commonProp = "Grow your business with";
  return (
    <>
      <Common
        name={commonProp}
        imgsrc={HomeImage}
        visit="/service"
        btnclass="Get Started"
      ></Common>
    </>
  );
};
export default Home;

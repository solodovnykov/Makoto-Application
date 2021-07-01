import React from "react";
import MainText from "../../components/MainText/MainText";
import Posts from "../../components/Posts/Posts";
import OurServers from "../../components/OurServers/OurServers";
import Donate from "../../components/Donate/Donate";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <MainText />
      <Posts />
      <OurServers />
      <Donate />
    </div>
  );
};

export default Home;

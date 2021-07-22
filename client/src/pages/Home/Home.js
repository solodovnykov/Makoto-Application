import React, { lazy, useEffect } from "react";
import "./home.scss";

import PlayerList from "../../components/PlayerList/PlayerList";

import Donate from "../../components/Donate/Donate";

const MainText = lazy(() => import("../../components/MainText/MainText"));
const Posts = lazy(() => import("../../components/Posts/Posts"));
const OurServers = lazy(() => import("../../components/OurServers/OurServers"));
// const PlayerList = lazy(() => import("../../components/Donate/Donate"));
// const Donate = lazy(() => import("../../components/PlayerList/PlayerList"));

export const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="home">
      <MainText />
      <Posts />
      <OurServers />
      <PlayerList />
      <Donate />
    </div>
  );
};

export default React.memo(Home);

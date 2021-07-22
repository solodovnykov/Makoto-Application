import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./startPlay.scss";
import TitleLine from "../../components/TitleLine/TitleLine";
import ServerCards from "../../components/ServerCards/ServerCards";
import MakotoServerInfo from "./ServersInfo/MakotoServerInfo/MakotoServerInfo";
import BorneoServerInfo from "./ServersInfo/BorneoServerInfo/BorneoServerInfo";
import HardcoreServerInfo from "./ServersInfo/HardcoreServerInfo/HardcoreServerInfo";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const StartPlay = () => {
  const query = useQuery();
  const page = query.get("page") || null;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  const renderSwitch = (page) => {
    switch (page) {
      case "1":
        return <MakotoServerInfo />;
      case "2":
        return <BorneoServerInfo />;
      case "3":
        return <HardcoreServerInfo />;
      default:
        return <ServerCards />;
    }
  };

  return (
    <div className="start-play">
      <TitleLine type="update">НАЧАТЬ ИГРАТЬ</TitleLine>
      <div className="alert-msg-wrapper">
        <div className="alert-icon">
          <div className="exclamation-point-wrapper">
            <div className="exclamation-point-top" />
            <div className="exclamation-point-bottom" />
          </div>
          <div className="alert-line" />
        </div>
        <div className="alert-msg">
          {!page
            ? "Выбери интересующий тебя сервер и нажми на его карточку!"
            : "Если у Вас возникли вопросы, обращайтесь к администрации"}
        </div>
      </div>
      {renderSwitch(page)}
    </div>
  );
};

export default StartPlay;

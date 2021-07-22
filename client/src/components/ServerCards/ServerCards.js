import React, { useEffect, useState } from "react";
import "./serverCards.scss";
import makotoBg from "../../images/OurServersPostMakoto.webp";
import borneoBg from "../../images/OurServersPostBorneo.webp";
import { Link } from "react-router-dom";
import axios from "axios";

const ServerCards = () => {
  const [makotoServerInfo, setMakotoServerInfo] = useState([]);
  const [borneoServerInfo, setBorneoServerInfo] = useState([]);
  const [hardcoreServerInfo, setHardcoreServerInfo] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const makotoRes = await axios.get(
          `https://eu.mc-api.net/v3/server/ping/vanilla.makotomc.ru`
        );
        const borneoRes = await axios.get(
          `https://eu.mc-api.net/v3/server/ping/vanilla.makotomc.ru:25555`
        );

        const hardcoreRes = await axios.get(
          `https://eu.mc-api.net/v3/server/ping/hardcore.eternum.su`
        );

        if (makotoRes && borneoRes && hardcoreRes) {
          setMakotoServerInfo(makotoRes.data);
          setBorneoServerInfo(borneoRes.data);
          setHardcoreServerInfo(hardcoreRes.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="server-cards">
      <Link
        to="/startPlay?page=1"
        style={{ backgroundImage: `url(${makotoBg})` }}
        className="server-card makoto-server-card"
      >
        <div className="server-card-title-wrapper">
          <div className="server-card-title">MAKOTO</div>
          <div className="server-card-subtitle">ВЫЖИВАНИЕ</div>
        </div>
        <div className="server-card-online">
          {makotoServerInfo.players
            ? `${makotoServerInfo.players.online} ИГРОКОВ ОНЛАЙН`
            : "СЕРВЕР ОФФЛАЙН"}{" "}
        </div>
      </Link>
      <div className="double-card">
        <Link
          to="/startPlay?page=2"
          style={{ backgroundImage: `url(${borneoBg})` }}
          className="server-card borneo-server-card"
        >
          <div className="server-card-title-wrapper">
            <div className="server-card-title">BORNEO</div>
            <div className="server-card-subtitle">ТВОРЧЕСКАЯ ПЛОЩАДКА</div>
          </div>
          <div className="server-card-online">
            {borneoServerInfo.players
              ? `${borneoServerInfo.players.online} ИГРОКОВ ОНЛАЙН`
              : "СЕРВЕР ОФФЛАЙН"}{" "}
          </div>
        </Link>

        <Link
          to="/startPlay?page=3"
          style={{ backgroundImage: `url(${makotoBg})` }}
          className="server-card hardcore-server-card"
        >
          <div className="server-card-title-wrapper">
            <div className="server-card-title">HARDCORE</div>
            <div className="server-card-subtitle">ХАРДКОР-ВЫЖИВАНИЕ</div>
          </div>
          <div className="server-card-online">
            {hardcoreServerInfo.players
              ? `${hardcoreServerInfo.players.online} ИГРОКОВ ОНЛАЙН`
              : "СЕРВЕР ОФФЛАЙН"}{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ServerCards);

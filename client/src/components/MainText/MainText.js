import axios from "axios";
import React, { useEffect, useState } from "react";
import "./mainText.scss";

const MainText = () => {
  const [minecraftServerInfo, setMinecraftServerInfo] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        `https://eu.mc-api.net/v3/server/ping/vanilla.makotomc.ru`
      );
      setMinecraftServerInfo(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="main-text">
      <div className="main-text-header">
        <div className="main-text-h1">MAKOTO</div>
        <div className="main-text-h2">КОМПЛЕКС УЮТНЫХ СЕРВЕРОВ</div>
      </div>
      <div className="main-text-body">
        <div className="main-text-online">
          {minecraftServerInfo.players ? (
            <>
              <div className="square online" />
              {minecraftServerInfo.players.online} игроков онлайн
            </>
          ) : (
            <>
              <div className="square offline" />
              сервер выключен
            </>
          )}
        </div>
        <div className="main-text-discord">
          1,500+ участников
          <div className="dicord-icon-mini"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainText);

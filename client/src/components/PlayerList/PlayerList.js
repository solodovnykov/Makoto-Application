import React, { useEffect, useState } from "react";
import axios from "axios";
import TitleLine from "../../components/TitleLine/TitleLine";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./playerList.scss";

const PlayerList = () => {
  const [makotoServerInfo, setMakotoServerInfo] = useState([]);
  const fetchUsers = async () => {
    const makotoRes = await axios.get(
      `https://eu.mc-api.net/v3/server/ping/vanilla.makotomc.ru`
    );
    setMakotoServerInfo(makotoRes.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="player-list">
      <TitleLine type="update">НАШИ ИГРОКИ</TitleLine>
      <div className="players-wrapper">
        <div className="players">
          {!makotoServerInfo.players
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div className="players-skeleton" key={i} />
              ))
            : makotoServerInfo.players.sample.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
        </div>
        <div className="shadow-block" />
      </div>
    </div>
  );
};

export default React.memo(PlayerList);

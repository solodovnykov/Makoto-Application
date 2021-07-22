import React from "react";
import "./playerCard.scss";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <div className="player-card-header">
        <div
          style={
            player
              ? {
                  backgroundImage: `url(https://crafatar.com/avatars/${player.id})`,
                }
              : ""
          }
          className="player-img"
        ></div>
      </div>
      <div className="player-name">{player.name}</div>
    </div>
  );
};

export default React.memo(PlayerCard);

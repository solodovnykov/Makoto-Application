import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../serverInfo.scss";

const BorneoServerInfo = () => {
  return (
    <div className="borneo-server-info">
      <div className="makoto-server-info">
        <div className="server-info-title">BORNEO</div>
        <div className="server-info-subtitle borneo-subtitle">
          ТВОРЧЕСКАЯ ПЛОЩАДКА
        </div>
        <div className="server-info-text bold-text">
          Borneo - лучший креативный сервер.
        </div>
        <div className="server-info-text margin-top-20">
          Borneo — режим Творчества, где у каждого игрока в распоряжении есть
          собственная суперплоскость с контролем времени, спауна мобов,
          невидимыми рамками да палками-отладками. И это ещё не всё, нет, ведь у
          каждого есть доступ к огромному банку пользовательских голов,
          полнофункциональным стойкам и великому и ужасному WorldEdit'у. Ну, да,
          теперь точно всё. Можете посещать миры других игроков. И без опасений
          что-то случайно сломать — от этого они надёжно защищены
        </div>
        <div className="server-guide-title">
          <div className="line" />
          <div className="server-guide-title-text">КАК НАЧАТЬ ИГРАТЬ</div>
          <div className="line" />
        </div>
        <div className="server-guide">
          <div className="server-guide-step">
            1. Для начала приобрети проход на сервер Borneo или Full-донат.
          </div>
          <div className="server-guide-step">
            2. Зайди на сервер{" "}
            <CopyToClipboard text="creative.makotomc.ru">
              <button>(IP: CREATIVE.MAKOTOMC.RU)</button>
            </CopyToClipboard>{" "}
            и наслаждайся :D
          </div>
          <div className="server-guide-note">
            <div className="vertical-line" />
            <div className="server-guide-note-text">
              Для игры на сервере нужно преобрести проход.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorneoServerInfo;

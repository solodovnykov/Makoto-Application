import React, { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../serverInfo.scss";

const HardcoreServerInfo = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="hardcore-server-info">
      <div className="makoto-server-info">
        <div className="server-info-title">HARDCORE</div>
        <div className="server-info-subtitle hardcore-subtitle">
          ХАРДКОР-ВЫЖИВАНИЕ
        </div>
        <div className="server-info-text bold-text">
          Hardcore by Eternum - хардорный сервер, который объеденяет много
          разных проектов.
        </div>
        <div className="server-info-text margin-top-20">
          Hardcore by Eternum, сервер для тех, кому наскучила вечная жизнь.
          Испытай себя и других. А если случилась оказия, и предназначение ещё
          не исполнено, то не беда, Харон, так уж и быть, вернёт с того света.
          Правда, за горсть звонких монет.
          <br />
          <br />
          Этот сервер был создан на базе проекта Eternum, в нем учавствует 5
          серверов (со временем кол-во серверов увеличится). Для входа вам
          потребуется лицензия. Удачной игры!
        </div>
        <div className="server-guide-title">
          <div className="line" />
          <div className="server-guide-title-text">КАК НАЧАТЬ ИГРАТЬ</div>
          <div className="line" />
        </div>
        <div className="server-guide">
          <div className="server-guide-step">
            1. Зайди на сервер{" "}
            <CopyToClipboard text="hardcore.eternum.su">
              <button>(IP: hardcore.eternum.su)</button>
            </CopyToClipboard>{" "}
            и наслаждайся :D
          </div>
          <div className="server-guide-step">
            2. В случае смерти, возродиться можно за небольшую сумму.
          </div>
          <div className="server-guide-note">
            <div className="vertical-line" />
            <div className="server-guide-note-text">
              На сервере у тебя есть только одна жизнь!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardcoreServerInfo;

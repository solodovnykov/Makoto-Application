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
        <div className="server-info-title">ONE BLOCK</div>
        <div className="server-info-subtitle hardcore-subtitle">МИНИ-ИГРА</div>
        <div className="server-info-text bold-text">
          One Block by Makoto - это известная мини-игра в исполнении от Makoto.
        </div>
        <div className="server-info-text margin-top-20">
          Наш One Block удивит Вас и затянет надолго, заходи и попробуй выжить
          на одном блоке.
          <br />
          <br />
          Этот сервер был создан для отдыха от ванильного сервера. Для входа вам
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
            <CopyToClipboard text="one.makotomc.ru">
              <button>(IP: one.makotomc.ru)</button>
            </CopyToClipboard>{" "}
            и наслаждайся :D
          </div>
          <div className="server-guide-note">
            <div className="vertical-line" />
            <div className="server-guide-note-text">
              Уважай других игроков и не мешай им!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardcoreServerInfo;

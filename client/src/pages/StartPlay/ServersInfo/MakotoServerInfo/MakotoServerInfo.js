import React, { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../serverInfo.scss";

const MakotoServerInfo = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="makoto-server-info">
      <div className="server-info-title">MAKOTO</div>
      <div className="server-info-subtitle makoto-subtitle">ВЫЖИВАНИЕ</div>
      <div className="server-info-text bold-text">
        Makoto Semi-Vanilla - единственные ванильные и по-своему уютные сервера
        по игре Minecraft.
      </div>
      <div className="server-info-text margin-top-20">
        Сервер может предоставить вам плавный геймплей, обеспечивающийся малым
        количеству плагинов, в число которых входят и самописные. Так же
        комфортная игра обусловлена наличием хорошей машины сервера (выделенный
        сервер). На сервере вы можете встретить и поговорить с игроками в любое
        время, ведь на сервере онлайн всегда выше нуля. Так же, с помощью
        обязательной привязки аккаунта к дискорду, мы сразу же отсеиваем
        некоторое количество гриферов, которые могут помешать свободному
        геймплею на сервере, а если они и попали на сервер, то наша
        Администрация всегда будет готова следить и наказывать нарушителей. Мы -
        самый активный сервер, ведь у нас имеются ивенты, которые проводятся,
        как минимум, раз в неделю. Они не дают заскучать игрокам, именно поэтому
        у нас самая большая база активных (!) игроков. Сервер создается вместе с
        пользователями: каждый может изменить вектор развития сервера, просто
        предложив достойную идею. Мы подходим как для игры с друзьями, так и в
        одиночку. Но заметим, что вряд ли вы сможете играть один более часа,
        ведь на сервере очень дружелюбные игроки, которые могут как просто
        завести в чате интересную тему, так и оказать поддержку.
      </div>
      <div className="server-guide-title">
        <div className="line" />
        <div className="server-guide-title-text">КАК НАЧАТЬ ИГРАТЬ</div>
        <div className="line" />
      </div>
      <div className="server-guide">
        <div className="server-guide-step">
          1. Зайди на сервер{" "}
          <CopyToClipboard text="vanilla.makotomc.ru">
            <button>(IP: vanilla.makotomc.ru)</button>
          </CopyToClipboard>{" "}
          и пропиши команду /discordlink
        </div>
        <div className="server-guide-step">
          2. В чате вы увидите код, который должны отправить в личные сообщения
          боту FukuNaka. Бота Вы можете найти на нашем Discord сервере.
        </div>
        <div className="server-guide-img" />
        <div className="server-guide-note">
          <div className="vertical-line" />
          <div className="server-guide-note-text">
            Когда бот отправит Вам сообщение об успешной привязке, это означает
            что Вы можете играть на сервере!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakotoServerInfo;

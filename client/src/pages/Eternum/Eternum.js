import React, { useEffect } from "react";
import TitleLine from "../../components/TitleLine/TitleLine";
import "./eternum.scss";

const Eternum = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="eternum">
      <div className="eternum-title-wrapper">
        <div className="eternum-logo" />
        <div className="eternum-title">ETERNUM</div>
      </div>
      <TitleLine type="servers">ЧТО ТАКОЕ ETERNUM</TitleLine>
      <div className="eternum-text">
        Eternum — это объединение серверов, созданное ради совместной игры и
        проведения ивентов. Мы создаем большое и адекватное объединение, в
        котором найдётся место каждому игроку, простому пользователю и даже
        целому серверу, ведь мы — сообщество дружелюбных и сплочённых серверов.
        Eternum создан для создания единого цельного пространства, где игроки
        смогут свободно общаться и принимать участие в глобальных интересных
        событиях межсерверного масштаба.
      </div>
      <TitleLine type="servers">КАК К НАМ ПРИСОЕДИНИТЬСЯ</TitleLine>
      <div className="eternum-text">
        Если Вы игрок, вам нужно всего-то нужно присоединиться к серверу
        Discord. Если Вы владелец проекта, присоединитесь к серверу Discord.
        <br />
        <br />
        Дальше осталось написать одному из администраторов (
        <span className="blue-c">MotyaRolla#3073, l_MrBoom_l#9553</span> )
      </div>

      <a
        href="https://discord.gg/GhVGKxz9Jj"
        rel="noreferrer"
        target="_blank"
        className="navbar-main-button"
      >
        ПРИСОЕДИНИТЬСЯ
      </a>
    </div>
  );
};

export default Eternum;

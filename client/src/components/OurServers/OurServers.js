import axios from "axios";
import React, { useEffect, useState } from "react";
import TitleLine from "../../components/TitleLine/TitleLine";
import "./ourServers.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import makotoBg from "../../images/OurServersPostMakoto.webp";
import borneoBg from "../../images/OurServersPostBorneo.webp";
import hardcoreBg from "../../images/OurServersPostHardcore.webp";

const OurServers = () => {
  const [makotoServerInfo, setMakotoServerInfo] = useState([]);
  const [borneoServerInfo, setBorneoServerInfo] = useState([]);
  const [hardcoreServerInfo, setHardcoreServerInfo] = useState([]);
  useEffect(() => {
    let cleanupFunction = false;
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

        if (!cleanupFunction) {
          setMakotoServerInfo(makotoRes.data);
          setBorneoServerInfo(borneoRes.data);
          setHardcoreServerInfo(hardcoreRes.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUsers();

    return () => (cleanupFunction = true);
  }, []);

  return (
    <div className="our-servers">
      <TitleLine type="servers">НАШИ СЕРВЕРА</TitleLine>
      <div className="server-cards">
        <div
          className="server-card"
          style={{ backgroundImage: `url(${makotoBg})` }}
        >
          <div className="server-card-flag-makoto">
            <p>SURVIVAL</p>
          </div>
          <div className="server-card-header">
            <div className="server-card-title">
              <div className="server-card-title-text">
                MAKOTO
                <span className="w-350 green-c f-16">
                  {makotoServerInfo && makotoServerInfo.version
                    ? makotoServerInfo.version.name.substr(
                        makotoServerInfo.version.name.indexOf(" ") + 1
                      )
                    : ""}
                </span>
              </div>
              <div className="server-card-online">
                {makotoServerInfo.players
                  ? `${makotoServerInfo.players.online} ИГРОКОВ ОНЛАЙН`
                  : "СЕРВЕР ОФФЛАЙН"}{" "}
              </div>
            </div>

            <div className="server-card-game-mode green-c">
              Игровой режим: <span className="w-350 white-c">Выживание</span>
            </div>
          </div>
          <div className="server-card-body">
            <p>
              Здесь Вам предстоит пройти все этапы классического Minecraft - от
              добычи первого дерева вашим неистовым кулаком до свержения
              жестокого дракона из другого измерения, а после насладиться тем,
              чем дополнили игру мы сами.
              <br />
              <br />
              {window.screen.width >= 480 ? (
                <>
                  В достижении заветной цели (какой бы она ни была) - вам
                  помогут люди. Общайтесь, развивайтесь в одиночку или вместе с
                  другими игроками, торгуйте, объединяйтесь в группы, отстаивая
                  общий интерес и наслаждайтесь игровым процессом!
                </>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="server-card-footer">
            <div className="server-card-link">РУКОВОДСТВО И ПОМОЩЬ</div>
            <CopyToClipboard text="vanilla.makotomc.ru">
              <button className="server-card-ip">VANILLA.MAKOTOMC.RU</button>
            </CopyToClipboard>
          </div>
        </div>

        <div
          className="server-card"
          style={{ backgroundImage: `url(${borneoBg})` }}
        >
          <div className="server-card-flag-borneo">
            <p>CREATIVE</p>
          </div>
          <div className="server-card-header">
            <div className="server-card-title">
              <div className="server-card-title-text">
                BORNEO
                <span className="w-350 purple-c f-16">
                  {borneoServerInfo && borneoServerInfo.version
                    ? borneoServerInfo.version.name.substr(
                        makotoServerInfo.version.name.indexOf(" ") + 1
                      )
                    : ""}
                </span>
              </div>
              <div className="server-card-online">
                {borneoServerInfo.players
                  ? `${borneoServerInfo.players.online} ИГРОКОВ ОНЛАЙН`
                  : "СЕРВЕР ОФФЛАЙН"}{" "}
              </div>
            </div>

            <div className="server-card-game-mode purple-c">
              Игровой режим: <span className="w-350 white-c">Творческий</span>
            </div>
          </div>
          <div className="server-card-body">
            <p>
              Это бесконечный простор для вашей фантазии, где все ограничивается
              только кубами. Вы получите свой собственный мир, который вольны
              оформить так, как пожелаете - а благодаря инструментам, которые мы
              внедрили в игру, сможете сделать намного больше, чем обычно.
              <br />
              <br />
              {window.screen.width >= 480 ? (
                <>
                  Общайтесь с другими строителями, посещайте их миры, делитесь
                  постройками и советами, стройте сами и восхищайте других
                  полетом своего воображения!
                </>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="server-card-footer">
            <div className="server-card-link">РУКОВОДСТВО И ПОМОЩЬ</div>
            <CopyToClipboard text="borneo.makotomc.ru">
              <button className="server-card-ip">BORNEO.MAKOTOMC.RU</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <div
        className="server-card server-card-full"
        style={{ backgroundImage: `url(${hardcoreBg})` }}
      >
        <div className="server-card-flag-hardcore">
          <p>HARDCORE</p>
        </div>
        <div className="server-card-header">
          <div className="server-card-title">
            <div className="server-card-title-text">
              HARDCORE
              <span className="w-350 red-c f-16">1.17.1</span>
            </div>
            <div className="server-card-online">
              {hardcoreServerInfo.players
                ? `${hardcoreServerInfo.players.online} ИГРОКОВ ОНЛАЙН`
                : "СЕРВЕР ОФФЛАЙН"}{" "}
            </div>
          </div>

          <div className="server-card-game-mode red-c">
            Игровой режим:{" "}
            <span className="w-350 white-c">Хардкор-Выживание</span>
          </div>
        </div>
        <div className="server-card-body">
          <p>
            Hardcore by Eternum - хардорный сервер, который объеденяет много
            разных проектов.
            <br />
            <br />
            Hardcore by Eternum, сервер для тех, кому наскучила вечная жизнь.
            Испытай себя и других. А если случилась оказия, и предназначение ещё
            не исполнено, то не беда, Харон, так уж и быть, вернёт с того света.
            Правда, за горсть звонких монет.
            <br />
            <br />
            {window.screen.width >= 480 ? (
              <>
                Этот сервер был создан на базе проекта Eternum, в нем учавствует
                5 серверов (со временем кол-во серверов увеличится). Для входа
                вам потребуется лицензия. Удачной игры!
              </>
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="server-card-footer">
          <div className="server-card-link">РУКОВОДСТВО И ПОМОЩЬ</div>
          <CopyToClipboard text="hardcore.eternum.su">
            <button className="server-card-ip">HARDCORE.ETERNUM.SU</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OurServers);

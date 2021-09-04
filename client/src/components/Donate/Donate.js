import React, { lazy } from "react";
import "./donate.scss";

const TitleLine = lazy(() => import("../../components/TitleLine/TitleLine"));

const Donate = () => {
  return (
    <div className="donate">
      <TitleLine type="danate">БЛАГОДАРНОСТЬ</TitleLine>
      <div className="donate-wrapper">
        <div className="donate-ifno">
          <div className="donate-info-card-1">
            Спасибо, что выбрали нас. Мы стараемся предоставить игрокам лучший
            игровой опыт, и пускай на нашем пути встречаются развилки и темные
            коридоры, в нас все еще горит огонь!
          </div>
          <div className="donate-info-card-2">
            Если у вас есть желание поддержать сервер, вот что можно сделать:
            <br />
            <br />
            — Быть активным. Мы стараемся только для игроков и надеемся на
            обратную связь. <br />
            — Соблюдать правила. Тогда всем нам будет немного легче. <br />
            — Поддержать материально. В благодарность вы получите <br />
            несколько косметических возможностей.
          </div>
        </div>
        <div className="donate-products">
          <a
            href="https://donate.makotomc.ru/"
            className="donate-card donate-card-green-border"
            target="_blank"
            rel="noreferrer"
          >
            <div className="donate-triangle triangle-green"></div>
            <div className="donate-title">FULL VANILLA</div>
            <div className="donate-price green-c">300 ₽</div>
            <div className="donate-description">
              При покупке Вы получите: цветной ник, роль в дискорде и несколько
              косметических команд на Makoto.
            </div>

            <div className="donate-footer">
              afk, me, act, hat, ptime, pweather
            </div>
          </a>

          <a
            href="https://donate.makotomc.ru/"
            className="donate-card donate-card-purple-border"
            target="_blank"
            rel="noreferrer"
          >
            <div className="donate-triangle triangle-purple"></div>
            <div className="donate-title">LITE VANILLA</div>
            <div className="donate-price purple-c">150 ₽</div>
            <div className="donate-description">
              При покупке Вы получите: цветной ник, роль в дискорде и несколько
              косметических команд на Makoto.
            </div>

            <div className="donate-footer">afk, me</div>
          </a>

          <a
            href="https://donate.makotomc.ru/"
            className="donate-card donate-card-pink-border"
            target="_blank"
            rel="noreferrer"
          >
            <div className="donate-triangle triangle-pink"></div>
            <div className="donate-title">РАЗБАН</div>
            <div className="donate-price pink-c">300 ₽</div>
            <div className="donate-description">
              При покупке данного товара вы можете снять с себя блокировку на
              сервере Vanilla. <br />
              <br />
              При каждом последующим разбаном цена будет увеличиваться в 1.5x.
            </div>
            <div className="donate-footer"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Donate);

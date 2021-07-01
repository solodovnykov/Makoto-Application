import React from "react";
import TitleLine from "../TitleLine/TitleLine";
import "./donate.scss";

export default function Donate() {
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
          <div className="donate-card donate-card-green-border">
            <div className="donate-triangle triangle-green"></div>
            <div className="donate-title">FULL VANILLA</div>
            <div className="donate-price green-c">250 ₽</div>
            <div className="donate-description">
              При покупке Вы получите несколько косметических команд на Makoto.
            </div>

            <div className="donate-footer">afk, me, act, hat, ptime</div>
          </div>

          <div className="donate-card donate-card-purple-border">
            <div className="donate-triangle triangle-purple"></div>
            <div className="donate-title">LITE VANILLA</div>
            <div className="donate-price purple-c">250 ₽</div>
            <div className="donate-description">
              При покупке Вы получите несколько косметических команд на Makoto.
            </div>

            <div className="donate-footer">afk, me, act, hat, ptime</div>
          </div>

          <div className="donate-card donate-card-pink-border">
            <div className="donate-triangle triangle-pink"></div>
            <div className="donate-title">РАЗБАН</div>
            <div className="donate-price pink-c">250 ₽</div>
            <div className="donate-description">
              При покупке Вы получите несколько косметических команд на Makoto.
            </div>
            <div className="donate-footer">afk, me, act, hat, ptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}

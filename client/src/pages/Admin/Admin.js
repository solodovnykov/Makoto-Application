import React from "react";
import Container from "../../components/Container/Container";
import "./admin.scss";

import RedArrowImg from "../../images/RedArrowIcon.svg";
import GreenPlusImg from "../../images/GreenPlusImg.svg";
import GraySuccessImg from "../../images/GraySuccessImg.svg";

export default function Admin() {
  return (
    <div className="admin">
      <Container>
        <div className="admin-header">
          <div className="admin-bar">
            <div className="line" />
            <div className="vk-icon" />
            <div className="line-center">
              <div className="line-top" />
              <div className="line-bottom" />
            </div>
            <div className="discord-icon" />
            <div className="line" />
          </div>

          <div className="admin-stats">
            <div className="admin-stat-list">
              <div className="admin-stat">
                <div className="admin-stat-title">Посещаемость сайта</div>
                <div className="admin-stat-items">
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">48</div>
                    <div className="admin-stat-info">за день</div>
                  </div>
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">500</div>
                    <div className="admin-stat-info">за неделю</div>
                  </div>
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">8450</div>
                    <div className="admin-stat-info">за месяц</div>
                  </div>
                </div>
              </div>

              <div className="admin-stat">
                <div className="admin-stat-title">Посещаемость сайта</div>
                <div className="admin-stat-items">
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">48</div>
                    <div className="admin-stat-info">за день</div>
                  </div>
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">500</div>
                    <div className="admin-stat-info">за неделю</div>
                  </div>
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">8450</div>
                    <div className="admin-stat-info">за месяц</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="hub-button"></button>

            <div className="admin-stat-list">
              <div className="admin-stat">
                <div className="admin-stat-title reverse">
                  Посещаемость сайта
                </div>
                <div className="admin-stat-items">
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">48</div>
                    <div className="admin-stat-info">за день</div>
                  </div>
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">500</div>
                    <div className="admin-stat-info">за неделю</div>
                  </div>
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">8450</div>
                    <div className="admin-stat-info">за месяц</div>
                  </div>
                </div>
              </div>

              <div className="admin-stat">
                <div className="admin-stat-title reverse">
                  Посещаемость сайта
                </div>
                <div className="admin-stat-items">
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">48</div>
                    <div className="admin-stat-info">за день</div>
                  </div>
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">500</div>
                    <div className="admin-stat-info">за неделю</div>
                  </div>
                  <div className="admin-stat-item">
                    <div className="admin-stat-number">8450</div>
                    <div className="admin-stat-info">за месяц</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-progress">
            <div className="progress">
              <div className="back-square">
                <div className="button">
                  <img src={RedArrowImg} alt="" />
                </div>
                <div className="line" />
              </div>
              <div className="progress-button">
                <div className="progress-button-header">
                  <div className="line active" />
                  <div className="button active">
                    <img
                      src={GreenPlusImg}
                      alt=""
                      className="button-image active"
                    />
                  </div>
                  <div className="line active" />
                </div>
              </div>

              <div className="progress-button">
                <div className="progress-button-header">
                  <div className="line active" />
                  <div className="button active">
                    <img
                      src={GreenPlusImg}
                      alt=""
                      className="button-image active"
                    />
                  </div>
                  <div className="line active" />
                </div>
              </div>

              <div className="progress-button">
                <div className="progress-button-header">
                  <div className="line active" />
                  <div className="button active">
                    <img
                      src={GreenPlusImg}
                      alt=""
                      className="button-image active"
                    />
                  </div>
                  <div className="line active" />
                </div>
              </div>

              <div className="success-square">
                <div className="line" />
                <div className="button">
                  <img src={GraySuccessImg} alt="" />
                </div>
              </div>
            </div>

            <div className="admin-icon" />
            <div className="line-progress" />
          </div>
        </div>
      </Container>
    </div>
  );
}

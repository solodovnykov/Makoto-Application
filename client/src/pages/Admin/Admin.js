import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import "./admin.scss";
import FileBase from "react-file-base64";
import RedArrowImg from "../../images/RedArrowIcon.svg";
import GreenPlusImg from "../../images/GreenPlusImg.svg";

export default function Admin() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [""],
    selectedFile: "",
  });

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

            <NavLink to="/" className="hub-button"></NavLink>
            <span className="admin-hub-line" />

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
                <div className={postData.title ? `line active` : `line`} />
              </div>
              <div className="progress-button">
                <div className="progress-button-header">
                  <div
                    className={
                      postData.title ? `line-progress-btn active` : `line`
                    }
                  />
                  <div className={postData.title ? `button active` : `button`}>
                    <img
                      src={GreenPlusImg}
                      alt=""
                      className={
                        postData.title ? `button-image active` : `button-image`
                      }
                    />
                    <div
                      className={
                        postData.title
                          ? `progress-button-footer active`
                          : `progress-button-footer`
                      }
                    >
                      Заголовок
                    </div>
                  </div>
                  <div
                    className={
                      postData.title ? `line-progress-btn active` : `line`
                    }
                  />
                </div>
              </div>

              <div className="progress-button">
                <div className="progress-button-header">
                  <div
                    className={
                      postData.tags[0] !== ""
                        ? `line-progress-btn active`
                        : `line`
                    }
                  />
                  <div
                    className={
                      postData.tags[0] !== "" ? `button active` : `button`
                    }
                  >
                    <img
                      src={GreenPlusImg}
                      alt=""
                      className={
                        postData.tags[0] !== ""
                          ? `button-image active`
                          : `button-image`
                      }
                    />
                    <div
                      className={
                        postData.tags[0] !== ""
                          ? `progress-button-footer active`
                          : `progress-button-footer`
                      }
                    >
                      Теги
                    </div>
                  </div>
                  <div
                    className={
                      postData.tags[0] !== ""
                        ? `line-progress-btn active`
                        : `line`
                    }
                  />
                </div>
              </div>

              <div className="progress-button">
                <div className="progress-button-header">
                  <div
                    className={
                      postData.selectedFile
                        ? `line-progress-btn active`
                        : `line`
                    }
                  />
                  <div
                    className={
                      postData.selectedFile ? `button active` : `button`
                    }
                  >
                    <img
                      src={GreenPlusImg}
                      alt=""
                      className={
                        postData.selectedFile
                          ? `button-image active`
                          : `button-image`
                      }
                    />

                    <div
                      className={
                        postData.selectedFile
                          ? `progress-button-footer active`
                          : `progress-button-footer`
                      }
                    >
                      Обложка
                    </div>
                  </div>
                  <div
                    className={
                      postData.selectedFile
                        ? `line-progress-btn active`
                        : `line`
                    }
                  />
                </div>
              </div>

              <div className="progress-button">
                <div className="progress-button-header">
                  <div
                    className={
                      postData.message ? `line-progress-btn active` : `line`
                    }
                  />
                  <div
                    className={postData.message ? `button active` : `button`}
                  >
                    <img
                      src={GreenPlusImg}
                      alt=""
                      className={
                        postData.message
                          ? `button-image active`
                          : `button-image`
                      }
                    />

                    <div
                      className={
                        postData.message
                          ? `progress-button-footer active`
                          : `progress-button-footer`
                      }
                    >
                      Текст
                    </div>
                  </div>
                  <div
                    className={
                      postData.message ? `line-progress-btn active` : `line`
                    }
                  />
                </div>
              </div>

              <div className="success-square">
                <div className={postData.message ? `line active` : `line`} />
                <div
                  className={
                    postData.title &&
                    postData.tags[0] !== "" &&
                    postData.selectedFile &&
                    postData.message
                      ? `button active`
                      : `button`
                  }
                >
                  <div className="success-icon">
                    <span className="success-line-1" />
                    <span className="success-line-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-icon"></div>
            <div className="line-progress" />
          </div>
        </div>

        <div className="admin-body">
          <div className="text-area">
            <input
              type="text"
              className="title-field"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              name="title"
              placeholder="Заголовок интересной новости для публикации"
            />
            <input
              type="text"
              className="tag-field"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
              name="tags"
              placeholder="Теги ( через запятую )"
            />
            <FileBase
              type="file"
              className="file-loader"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            ></FileBase>
            <textarea
              type="text"
              className="text-field"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
              name="message"
              placeholder="Текст поста"
            />
          </div>
          <div className="image-area"></div>
        </div>
      </Container>
    </div>
  );
}

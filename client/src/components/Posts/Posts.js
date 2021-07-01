import React from "react";
import TitleLine from "../../components/TitleLine/TitleLine";
import Post from "../../components/Post/Post";
import "./posts.scss";

export default function Posts() {
  return (
    <div className="posts">
      <TitleLine type="update">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</TitleLine>
      <div className="posts-list">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <div className="posts-button-wrapper">
          <div className="posts-button">
            ПОСМОТРЕТЬ ВСЁ
            <div className="arrow-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

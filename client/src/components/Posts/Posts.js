import React from "react";
import TitleLine from "../../components/TitleLine/TitleLine";
import Post from "../../components/Post/Post";
import { useSelector } from "react-redux";
import "./posts.scss";

export default function Posts() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts">
      <TitleLine type="update">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</TitleLine>
      {!posts.length ? (
        <div>Loading...</div>
      ) : (
        <div className="posts-list">
          {!posts.length ? (
            <div>Loading...</div>
          ) : (
            posts.map((post) => (
              <Post key={post._id} post={post} />
            ))
          )}
          <div className="posts-button-wrapper">
            <div className="posts-button">
              ПОСМОТРЕТЬ ВСЁ
              <div className="arrow-icon"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import moment from "moment";
import 'moment/locale/ru';
import { useHistory } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./post.scss";

moment.locale("ru");

const Post = ({ post, height }) => {
  const history = useHistory();
  const openPost = () => history.push(`/posts/${post._id}`);

  return (
    <div className="post-card">
      <div className="post-card-header">
        <div className="post-card-tags">
          {post.tags.map((tag, index) => (
            <div key={index} className="tag post-tag-event">
              {tag}
            </div>
          ))}
        </div>
        <div className="post-card-date">
          <div className="post-card-date-icon"></div>
          <div className="">{moment(post.createdAt).format("LL")}</div>
        </div>
      </div>
      <LazyLoad placeholder={<div className="post-loader"></div>}>
        <div
          style={
            !post
              ? ""
              : {
                  backgroundImage: `url(${post.selectedFile})`,
                  maxHeight: height ? height : "295px",
                }
          }
          className="post-card-body"
          onClick={openPost}
        >
          <div className="post-card-footer-wrapper">
            <div className="post-card-footer">
              <div className="post-card-footer-text">{post.title}</div>
              <div className="post-card-footer-icon"></div>
            </div>
            <div className="post-card-text">{post.message}</div>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default React.memo(Post);

import React from "react";
import moment from "moment";
import "./post.scss";

export default function Post({ post }) {
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
          <div className="">{moment(post.createdAt).add(10, 'days').calendar()}</div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${post.selectedFile})` }}
        className="post-card-body"
      >
        <div className="post-card-footer">
          <div className="post-card-footer-text">{post.title}</div>
          <div className="post-card-footer-icon"></div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./post.scss";

export default function Post() {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <div className="post-card-tags">
          <div className="tag post-tag-new">НОВОЕ</div>
          <div className="tag post-tag-important">ВАЖНО</div>
          <div className="tag post-tag-survive">ВЫЖИВАНИЕ</div>
        </div>
        <div className="post-card-date">
          <div className="post-card-date-icon"></div>
          <div className="">11.05.2020</div>
        </div>
      </div>
      <div className="post-card-body">
        <div className="post-card-footer">
          <div className="post-card-footer-text">Post title</div>
          <div className="post-card-footer-icon"></div>
        </div>
      </div>
    </div>
  );
}

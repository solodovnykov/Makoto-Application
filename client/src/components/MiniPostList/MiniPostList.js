import React from "react";
import { useSelector } from "react-redux";
import MiniPost from "../../components/MiniPost/MiniPost";
import "./miniPostList.scss";

const MiniPostList = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  

  return (
    <div className="mini-post-list">
      {!posts.length ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => (
          <MiniPost key={post._id} post={post} setCurrentId={setCurrentId} />
        ))
      )}
    </div>
  );
};

export default MiniPostList;

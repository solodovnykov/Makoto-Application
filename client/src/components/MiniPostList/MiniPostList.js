import React, { lazy } from "react";
import { useSelector } from "react-redux";
import "./miniPostList.scss";
import loaderImg from "../../images/Loader.gif";

const MiniPost = lazy(() => import("../../components/MiniPost/MiniPost"));

const MiniPostList = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  return (
    <div className="mini-posts">
      {isLoading ? (
        <img src={loaderImg} alt="" className="loader" />
      ) : (
        <div className="mini-post-list">
          {posts.map((post) => (
            <MiniPost key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(MiniPostList);

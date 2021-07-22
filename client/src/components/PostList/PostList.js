import React, { useEffect, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import LazyLoad from "react-lazyload";
import "./postList.scss";

const Post = lazy(() => import("../../components/Post/Post"));

const Loading = () => <div>Loading...</div>;

const PostList = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(1));
  }, [dispatch]);

  return (
    <div className="post-list">
      {isLoading ? (
        <div className="posts-list">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="posts-skeleton" key={i} />
          ))}
        </div>
      ) : (
        <>
          <div className="posts-list">
            {posts?.map((post) => (
              <LazyLoad key={post._id} placeholder={<Loading />}>
                <Post key={post._id} post={post} />
              </LazyLoad>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(PostList);

import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./posts.scss";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { getPosts } from "../../actions/posts";

const Post = lazy(() => import("../../components/Post/Post"));
const TitleLine = lazy(() => import("../../components/TitleLine/TitleLine"));

const Loading = () => <div>Loading...</div>;

const Posts = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const postCount = window.innerWidth <= 600 ? 3 : 5;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(1));
  }, [dispatch]);

  return (
    <div className="posts">
      <Suspense fallback={<div />}>
        <TitleLine type="update">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</TitleLine>
      </Suspense>

      {isLoading ? (
        <div className="posts-list-home">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="posts-skeleton" key={i} />
          ))}
        </div>
      ) : (
        <Suspense fallback={<div />}>
          <div className="posts-list-home">
            {posts?.slice(0, postCount).map((post) => (
              <LazyLoad key={post._id} fallback={Loading}>
                <Post key={post._id} post={post} />
              </LazyLoad>
            ))}
            <Link to="/posts" className="posts-button-wrapper">
              <div className="posts-button">
                ПОСМОТРЕТЬ ВСЁ
                <div className="arrow-icon"></div>
              </div>
            </Link>
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default React.memo(Posts);

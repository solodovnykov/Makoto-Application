import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import 'moment/locale/ru';
import { useParams } from "react-router";
import { getPost, getPostsBySearch } from "../../actions/posts";
import "./postScreen.scss";
import Post from "../../components/Post/Post";
import LoaderImg from "../../images/Loader.gif";

moment.locale("ru");

const PostScreen = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post, dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  if (!post) {
    return (
      <div className="loader">
        <img src={LoaderImg} alt="" className="loader-img" />
      </div>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  return (
    <div className="post-screen">
      {isLoading ? (
        <div className="loader">
          <img src={LoaderImg} alt="" className="loader-img" />
        </div>
      ) : (
        <>
          <div
            className="post-image"
            style={{ backgroundImage: `url(${post.selectedFile})` }}
          />
          <div className="post-header">
            <div className="post-title">{post.title}</div>
            <div className="post-time">
              {moment(post.createdAt).format("LL")}
            </div>
          </div>
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="post-text">{post.message}</div>
        </>
      )}

      {!!recommendedPosts.length && (
        <>
          <div className="recommended-title">
            Рекомендации <div className="line"></div>
          </div>

          <div className="recommended">
            {recommendedPosts.slice(0, 2).map((post) => (
              <Post key={post._id} post={post} height={"200px"} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(PostScreen);

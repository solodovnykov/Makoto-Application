import React, { useEffect } from "react";
import "./postListScreen.scss";
import { useLocation } from "react-router-dom";
import TitleLine from "../../components/TitleLine/TitleLine";
import Pagination from "../../components/Pagination/Pagination";
import PostList from "../../components/PostList/PostList";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PostListScreen = () => {
  const query = useQuery();
  const page = query.get("page") || 1;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="post-list-screen">
      <div className="post-list-title-wrapper">
        <TitleLine type="update">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</TitleLine>
        {window.screen.width >= 480 ? (
          <Pagination page={page} route="posts" />
        ) : (
          ""
        )}
      </div>
      {window.screen.width <= 480 ? (
        <div className="pagination-wrapper">
          <Pagination page={page} route="posts" />
        </div>
      ) : (
        ""
      )}

      <PostList />
    </div>
  );
};

export default React.memo(PostListScreen);

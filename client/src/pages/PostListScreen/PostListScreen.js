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
      <TitleLine type="update">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</TitleLine>
      <PostList />
      <Pagination page={page} />
    </div>
  );
};

export default React.memo(PostListScreen);

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { Link } from "react-router-dom";
import "./paginationAdmin.scss";

const PaginationAdmin = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);
  return (
    <div className="page-list">
      {[...Array(numberOfPages)].map((page, index) => (
        <Link
          key={index}
          className="page-number-btn"
          to={`/admin?page=${Number(index + 1)}`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default PaginationAdmin;

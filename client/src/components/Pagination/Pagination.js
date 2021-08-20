import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { Link, useLocation } from "react-router-dom";
import "./pagination.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Pagination = ({ page, route }) => {
  const query = useQuery();
  const pageNumber = query.get("page") || 1;
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(5);
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  const nextPage = () => {
    setFirstPage(firstPage + 5);
    setLastPage(lastPage + 5);
  };
  const previousPage = () => {
    setFirstPage(firstPage - 5);
    setLastPage(lastPage - 5);
  };

  return (
    <div className="pagination">
      <div className="page-buttons">
        {firstPage === 0 ? (
          ""
        ) : (
          <div className="page-number-btn prev-next-btn" onClick={previousPage}>
            {'<'}
          </div>
        )}
        {[...Array(numberOfPages).keys()]
          .slice(firstPage, lastPage)
          .map((page, index) => (
            <Link
              key={index}
              className={
                pageNumber == page + 1
                  ? "page-number-btn page-number-btn-active"
                  : "page-number-btn"
              }
              to={`/${route}?page=${Number(page + 1)}`}
            >
              {page + 1}
            </Link>
          ))}
        {lastPage >= numberOfPages ? (
          ""
        ) : (
          <div className="page-number-btn prev-next-btn" onClick={nextPage}>
            {'>'}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Pagination);

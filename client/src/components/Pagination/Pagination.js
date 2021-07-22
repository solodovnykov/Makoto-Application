import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { Link } from "react-router-dom";
import "./pagination.scss";

const Pagination = ({ page }) => {
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
      <div className='page-buttons'>
        {firstPage === 0 ? (
          ""
        ) : (
          <div className="page-number-btn prev-next-btn" onClick={previousPage}>
            Prev
          </div>
        )}
        {[...Array(numberOfPages).keys()]
          .slice(firstPage, lastPage)
          .map((page, index) => (
            <Link
              key={index}
              className="page-number-btn"
              to={`/posts?page=${Number(page + 1)}`}
            >
              {page + 1}
            </Link>
          ))}
        {lastPage >= numberOfPages ? (
          ""
        ) : (
          <div className="page-number-btn prev-next-btn" onClick={nextPage}>
            Next
          </div>
        )}
      </div>
      <div className="page-text">Страница {page}</div>
    </div>
  );
};

export default React.memo(Pagination);

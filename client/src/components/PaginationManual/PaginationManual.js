import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./paginationManual.scss";
import { getManuals } from "../../actions/manuals";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PaginationManual = ({ page, route }) => {
  const query = useQuery();
  const pageNumber = query.get("page") || 1;
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(2);
  const { numberOfPages } = useSelector((state) => state.manuals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getManuals(page));
  }, [dispatch, page]);

  const nextPage = () => {
    setFirstPage(firstPage + 2);
    setLastPage(lastPage + 2);
  };
  const previousPage = () => {
    setFirstPage(firstPage - 2);
    setLastPage(lastPage - 2);
  };

  return (
    <div className="pagination pagination-manual">
      <div className="page-buttons">
        {firstPage === 0 ? (
          ""
        ) : (
          <div className="page-number-btn prev-next-btn" onClick={previousPage}>
            {`<`}
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
            {`>`}
          </div>
        )}
      </div>
      {/* <div className="page-text">Страница {page}</div> */}
    </div>
  );
};

export default React.memo(PaginationManual);

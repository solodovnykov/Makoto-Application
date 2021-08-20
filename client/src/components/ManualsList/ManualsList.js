import React, { useEffect, Suspense, lazy } from "react";
import LazyLoad from "react-lazyload";
import "./manualsList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getManuals } from "../../actions/manuals";

const ManualCard = lazy(() => import("../../components/ManualCard/ManualCard"));

const Loading = () => <div>Loading...</div>;

const ManualsList = () => {
  const { manuals, isLoading } = useSelector((state) => state.manuals);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getManuals(1));
  }, [dispatch]);

  return (
    <div className="">
      {/* <div className="manuals-list">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div className="posts-skeleton" key={i} />
        ))}
      </div> */}
      {isLoading ? (
        <div className="manuals-list">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="posts-skeleton" key={i} />
          ))}
        </div>
      ) : (
        <Suspense fallback={<div />}>
          <div className="manuals-list">
            {manuals?.map((manual) => (
              <LazyLoad key={manual._id} placeholder={<Loading />}>
                <ManualCard key={manual._id} manual={manual} />
              </LazyLoad>
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default React.memo(ManualsList);

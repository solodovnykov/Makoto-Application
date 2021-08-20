import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getManuals } from "../../actions/manuals";
import loaderImg from "../../images/Loader.gif";

const MiniPost = lazy(() => import("../MiniPost/MiniPost"));

const MiniManualList = ({ setCurrentId }) => {
  const { manuals, isLoading } = useSelector((state) => state.manuals);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getManuals(1));
  }, [dispatch]);

  console.log(manuals);

  return (
    <div className="mini-posts">
      {isLoading ? (
        <img src={loaderImg} alt="" className="loader" />
      ) : (
        <div className="mini-post-list">
          {manuals.map((manual) => (
            <MiniPost
              key={manual._id}
              post={manual}
              setCurrentId={setCurrentId}
              type='manual'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(MiniManualList);

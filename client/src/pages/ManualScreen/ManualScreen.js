import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";
import { getManual } from "../../actions/manuals";
import LoaderImg from "../../images/Loader.gif";
import "./manualScreen.scss";
import parse from 'html-react-parser';

moment.locale("ru");

const ManualScreen = () => {
  const { manual, isLoading } = useSelector((state) => state.manuals);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getManual(id));
  }, [id, dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  if (!manual) {
    return (
      <div className="loader">
        <img src={LoaderImg} alt="" className="loader-img" />
      </div>
    );
  }
  
  return (
    <div className="manual-screen">
      {isLoading ? (
        <div className="loader">
          <img src={LoaderImg} alt="" className="loader-img" />
        </div>
      ) : (
        <>
          <div className="manual-screen-header">
            <div
              style={{ backgroundImage: `url(${manual.selectedFile})` }}
              className="manual-screen-img"
            />
            <div className="manual-screen-wrapper">
              <h1 className="manual-screen-title">
                {manual.title.toUpperCase()}
              </h1>
              <div className="manual-screen-date">
                {moment(manual.createdAt).format("LL")}
              </div>
            </div>
          </div>
          <div className="manual-screen-text">{parse(manual.message)}</div>
        </>
      )}
    </div>
  );
};

export default React.memo(ManualScreen);

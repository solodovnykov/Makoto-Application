import React from "react";
import { useHistory } from "react-router-dom";
import "./manualCard.scss";
import parse from 'html-react-parser';

const ManualCard = ({ manual }) => {
  const history = useHistory();
  const openPost = () => history.push(`/manuals/${manual._id}`);

  return (
    <div onClick={openPost} className="manual-card">
      <div
        style={
          !manual
            ? ""
            : {
                backgroundImage: `url(${manual.selectedFile})`,
              }
        }
        className="manual-card-image"
      ></div>
      <div className="manual-card-body">
        <div className="manual-card-title">{manual.title}</div>
        <div className="manual-card-text">{parse(manual.message)}</div>
      </div>
    </div>
  );
};

export default React.memo(ManualCard);

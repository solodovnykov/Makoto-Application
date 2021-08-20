import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ManualsList from "../../components/ManualsList/ManualsList";
import PaginationManual from "../../components/PaginationManual/PaginationManual";
import TitleLine from "../../components/TitleLine/TitleLine";
import "./manuals.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Manuals = () => {
  const query = useQuery();
  const page = query.get("page") || 1;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="manuals">
      <div className="title-line-wrapper">
        <TitleLine type="servers">РУКОВОДСТВА</TitleLine>
        <PaginationManual page={page} route="manuals" />
      </div>

      <ManualsList />
    </div>
  );
};

export default Manuals;

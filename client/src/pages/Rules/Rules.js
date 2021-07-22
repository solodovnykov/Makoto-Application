import React, { useEffect } from "react";
import DropdownList from "../../components/DropdownList/DropdownList";
import items from "./rulesData";
import TitleLine from "../../components/TitleLine/TitleLine";
import "./rules.scss";

function Rules() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="rules">
      <TitleLine type="update">ПРАВИЛА</TitleLine>
      <div className="rules-list">
        {items.map((item) => (
          <DropdownList key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Rules;

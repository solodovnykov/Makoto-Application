import React, { useState } from "react";
import "./dropdownList.scss";

const DropdownList = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown-list-wrapper">
      <div className="rule-title-number">{item.number}</div>
      <div
        className={open ? "dropdown-card show" : "dropdown-card"}
        onClick={() => setOpen(!open)}
      >
        <div
          className={open ? "rule-content-line show" : "rule-content-line"}
        ></div>
        <div className={open ? "dropdown-title show" : "dropdown-title"}>
          <div className="rule-title">{item.title}</div>
          <button
            className={open ? "rule-title-btn show" : "rule-title-btn"}
          ></button>
        </div>
        <div
          className={open ? "rule-content show padding-rule" : "rule-content"}
        >
          {item
            ? item.rules.map((rule) => (
                <div key={rule.id} className="rule-wrapper">
                  <div className="rule-text-wrapper">
                    <div className="rule-number">{rule.number}</div>
                    <div className="rule-text">{rule.rule}</div>
                  </div>
                  {rule.penalty ? (
                    <div className="rule-penalty">
                      <div className="rule-penalty-icon"></div>
                      <div className="rule-penalty-text">
                        <span className="red-c">Наказание:</span>
                        {"  "}
                        {rule.penalty}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default DropdownList;

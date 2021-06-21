import React from "react";
import "./index.css";

export const CheckBox = (props) => (
  <label className="switch">
    <input type="checkbox" {...props} />
    <span className="slider round"></span>
  </label>
);

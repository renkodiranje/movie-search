import React from "react";
import "./style.css";

const ErrorMsg = ({ children }) => {
  return <div className="error-message">{children}</div>;
};

export default ErrorMsg;

import React from "react";

import spinner from "../../assets/images/spinner.svg";

const Loading = () => {
  return (
    <div className="spinner-wrapper">
      <img src={spinner} alt="spinner" />
      {/* <Spinner /> */}
    </div>
  );
};

export default Loading;

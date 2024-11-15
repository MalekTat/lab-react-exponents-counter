import React from "react";

const ExponentThree = ({count}) => {
  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}³</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{Math.pow(count, 3)}</span></p>
  </div>
  );
};

export default ExponentThree;
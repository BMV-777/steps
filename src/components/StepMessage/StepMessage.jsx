import React from "react";

const StepMessage = ({ step, children }) => {
  return (
    <p className="message">
      {step}:{children}
    </p>
  );
};

export default StepMessage;

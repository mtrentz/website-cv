import React from "react";

const ColoredText = ({ c, t }) => {
  return (
    <span className="font-medium" style={{ color: c }}>
      {t}
    </span>
  );
};

export default ColoredText;

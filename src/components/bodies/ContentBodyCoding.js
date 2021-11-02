import React from "react";
import { useEffect } from "react";
import python from "../../images/python.png";

const ContentBodyCoding = ({ linkId, handleMount }) => {
  useEffect(() => {
    handleMount(linkId);
  });

  return (
    <div className="w-[80%] h-[90%] flex items-center justify-center">
      <div className="overflow-y-auto h-full grid grid-cols-3 gap-x-4 gap-y-4 px-10"></div>
    </div>
  );
};

export default ContentBodyCoding;

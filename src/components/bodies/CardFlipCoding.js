import React from "react";
import DescriptionText from "./DescriptionText";

const CardFlipCoding = ({ cardImage, projectTitle, projectDescription }) => {
  return (
    <div className="bg-white w-full md:h-48 xl:h-56 2xl:h-64 flex flex-col rounded-md shadow p-[2%]">
      {/* Image Part */}
      <div className="h-[35%] flex justify-center py-1">
        <img src={cardImage} alt={projectTitle} className="h-full" />
      </div>

      {/* Text Front */}
      <div className="flex h-full w-full items-center">
        <DescriptionText
          cardTitle={projectTitle}
          cardDescription={projectDescription}
        />
      </div>

      {/* Text Back */}
      <div className="flex h-full w-full items-center">
        <DescriptionText
          cardTitle={projectTitle}
          cardDescription={projectDescription}
        />
      </div>
    </div>
  );
};

export default CardFlipCoding;

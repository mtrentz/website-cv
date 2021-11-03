import React from "react";
import GithubButton from "./GithubButton";

const CardCodingText = ({ title, description, link }) => {
  return (
    <div className="w-[70%] flex flex-col justify-center items-between m-auto">
      <p className="text-center h-[20%] font-medium">{title}</p>
      <p className="text-center h-[80%]">{description}</p>
      <GithubButton link={link} />
    </div>
  );
};

export default CardCodingText;

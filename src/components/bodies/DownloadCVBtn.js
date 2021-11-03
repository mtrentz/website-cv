import React from "react";

const DownloadCVBtn = ({ cv }) => {
  return (
    <div className="bg-gray-100 hover:bg-terciary transition ease-in-out mt-4 rounded-xl py-1 mx-auto w-44 2xl:w-52 flex justify-center border border-gray-300">
      <a
        download
        href={cv}
        className="text-center font-medium text-base 2xl:text-lg w-full h-full"
      >
        Download my CV
      </a>
    </div>
  );
};

export default DownloadCVBtn;

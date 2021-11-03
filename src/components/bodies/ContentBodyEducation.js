import React from "react";
import { useEffect } from "react";
import aang from "../../images/aang.png";
import ufrgs from "../../images/ufrgs.png";
import maxiquim from "../../images/maxiquim.png";

// This card is kinda unique so I wont try to make into a customizable component
const ContentBodyEducation = ({ linkId, handleMount }) => {
  useEffect(() => {
    handleMount(linkId);
  });

  return (
    <div className="bg-white w-[90%] h-[90%] 2xl:w-[80%] 2xl:h-[80%] flex flex-col justify-center rounded-md overflow-hidden shadow-lg">
      {/* Top Part*/}
      <div className=" flex-1 flex flex-row">
        {/* Left Part */}
        <div className=" w-1/4 px-4 min-w-min flex items-center justify-center pl-8">
          {/* Container for rounded image (cropped) */}
          <div className="h-32 w-32 md:h-38 md:w-38 lg:w-44 lg:h-44 2xl:w-56 2xl:h-56 overflow-hidden rounded-full border">
            <img
              src={aang}
              alt="Profile Pic"
              className="object-cover scale-150 pl-2"
            />
          </div>
        </div>

        {/* Right Part */}
        <div className="flex flex-col flex-1 justify-center px-4">
          <h2 className="font-medium text-2xl pl-6 pb-2 text-left">
            Mateus K. Trentz
          </h2>
          <p className=" flex-0 text-left leading-normal">
            I'm a Chemical Engineer who is very passionate about Tech and Data.
            I love programming and I've been doing it for a few years now. I
            currently work as a Data Scientist at MaxiQuim, which is a Brazilian
            consulting company for the chemical industry in Brazil, where I
            live.
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="h-5 flex flex-col justify-center items-center">
        <div className="bg-gray-200 w-5/6 h-[2px]"></div>
      </div>

      {/* Bottom Part*/}
      <div className=" flex flex-row flex-1 justify-around">
        {/* Left Part */}
        <div className=" flex-1 flex items-center justify-center md:gap-4 lg:gap-10">
          {/* Logo Part */}
          <div className="w-24 h-24 md:h-32 md:w-32 lg:h-36 lg:w-36 2xl:h-48 2xl:w-48 overflow-hidden rounded-full border flex justify-center">
            <img src={ufrgs} alt="University Logo" className="" />
          </div>

          {/* Text Part */}
          <div className="w-[50%]">
            <p className="font-semibold text-center">
              Universidade Federal do Rio Grande do Sul
            </p>
            <p className="flex-0 text-center"> Chemical Engineering </p>
            <p className="flex-0 text-center"> Graduated in 2020 </p>
          </div>
        </div>

        {/* Separator */}
        <div className=" w-5 flex-none flex flex-col justify-center pl-3">
          <div className="bg-gray-200 h-3/4 w-[2px] transform rotate-[5deg]"></div>
        </div>

        {/* Right Part */}
        <div className="bg-white flex-1 flex items-center justify-center md:gap-4 lg:gap-10 w-[50%]">
          {/* Logo Part */}
          <div className="w-32 h-24 md:w-36 md:h-28 lg:w-40 lg:h-32 2xl:w-52 2xl:h-40 overflow-hidden rounded-2xl border flex justify-center">
            <img src={maxiquim} alt="Company Logo" className="" />
          </div>

          {/* Text Part */}
          <div>
            <p className="font-semibold text-center">MaxiQuim</p>
            <p className="flex-0 text-center"> Data Scientist </p>
            <p className="flex-0 text-center"> mar/2020 - present </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBodyEducation;

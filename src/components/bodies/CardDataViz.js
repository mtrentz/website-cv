import React from "react";

const CardDataViz = ({ vizzesData }) => {
  return (
    <div className="w-[80%] py-5 overflow-y-auto h-full">
      {vizzesData.map((vizData) => (
        //   Card
        <div className="bg-white w-[90%] h-[25%] 2xl:h-[20%] rounded-xl flex flex-row overflow-hidden shadow-lg my-5">
          {/* Text Part */}
          <div className=" w-[40%] p-5 overflow-auto py-2 flex flex-col object-center justify-center">
            {/* Title */}
            <div className="h-[30%] flex items-center justify-center">
              <p className="text-md font-semibold text-center">
                {" "}
                {vizData.title}{" "}
              </p>
            </div>
            {/* Description */}
            <div className="flex flex-col justify-center mt-1">
              <p className="text-base text-center">{vizData.description}</p>
            </div>
          </div>
          {/* Image Part */}
          <a href={vizData.link} className="w-[60%] flex -space-x-1 z-10">
            {/* This is to simmulate a rounded corner of the logo and description part with the image on the bottom of it */}
            <div className="bg-white w-1 rounded-r-lg z-20"></div>
            <img
              src={vizData.image}
              alt=""
              className="object-cover w-full opacity-80"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardDataViz;

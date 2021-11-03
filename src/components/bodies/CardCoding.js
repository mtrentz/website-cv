import React from "react";
import CardCodingText from "./CardCodingText";

const CardCoding = ({ title, description, image, link, reverse }) => {
  return (
    <>
      {/* Segment */}
      <div className="w-full flex px-2">
        {/* TODO: acho que existe um treco de CSS pra reverter a order do flex, deveria ter usdao isso.. */}
        {/* If reverse false, image on the left */}
        {reverse ? (
          <CardCodingText title={title} description={description} link={link} />
        ) : null}

        {/* Image Part */}
        <div className="w-[30%] flex justify-center">
          <div className="w-56 h-56 2xl:w-64 2xl:h-64 flex justify-center p-2 my-5">
            <a
              href={link}
              className="rounded-full overflow-hidden flex justify-center border"
            >
              <img src={image} alt="" className="" />
            </a>
          </div>
        </div>

        {/* If reverse true, image on the right */}
        {reverse ? null : (
          <CardCodingText title={title} description={description} link={link} />
        )}
      </div>
    </>
  );
};

export default CardCoding;

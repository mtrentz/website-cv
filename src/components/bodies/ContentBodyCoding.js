import React from "react";
import { useEffect } from "react";
import CardDefault from "./CardDefault";
import CardDouble from "./CardDouble";
import python from "../../images/python.png";

const ContentBodyCoding = ({ linkId, handleMount }) => {
  useEffect(() => {
    handleMount(linkId);
  });

  return (
    <div className="w-[70%] h-[90%] flex items-center justify-center">
      <div className="overflow-auto h-full p-20 bg-red-500 mt-10 flex flex-col gap-10">
        <CardDefault
          cardImage={python}
          cardTitle="Python"
          cardDescription="Something about the programming language Python"
        />
        <CardDefault
          cardImage={python}
          cardTitle="abc"
          cardDescription="Something about the programming language Python"
        />
        <CardDefault
          cardImage={python}
          cardTitle="Python"
          cardDescription="Something about the programming language Python"
        />
        <CardDefault
          cardImage={python}
          cardTitle="Python"
          cardDescription="Something about the programming language Python"
        />
      </div>
    </div>
  );
};

export default ContentBodyCoding;

{
  /* <div className="w-[70%] h-[90%] flex items-center justify-center">
  <div className="overflow-auto h-full p-20 bg-red-500 mt-10 flex flex-col gap-10">
    <CardDefault
      cardImage={python}
      cardTitle="Python"
      cardDescription="Something about the programming language Python"
    />
    <CardDefault
      cardImage={python}
      cardTitle="abc"
      cardDescription="Something about the programming language Python"
    />
    <CardDefault
      cardImage={python}
      cardTitle="Python"
      cardDescription="Something about the programming language Python"
    />
    <CardDefault
      cardImage={python}
      cardTitle="Python"
      cardDescription="Something about the programming language Python"
    />
  </div>
</div>; */
}

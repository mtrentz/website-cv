import React from "react";
import { useEffect } from "react";
import CardDefault from "./CardDefault";
import CardDouble from "./CardDouble";
import python from "../../images/python.png";
import golang from "../../images/golang.png";
import javascript from "../../images/javascript.png";
import tableauDash from "../../images/tableau_dashboard.png";
import tableau from "../../images/tableau.png";
import mysql from "../../images/mysql.png";

const ContentBodyTech = ({ linkId, handleMount }) => {
  useEffect(() => {
    handleMount(linkId);
  });

  return (
    <div className="w-[70%] h-[90%] flex items-center justify-center">
      <div className="grid grid-cols-3 gap-x-1 gap-y-2">
        <CardDefault
          cardImage={python}
          cardTitle="Python"
          cardDescription="Something about the programming language Python"
        />
        <CardDefault
          cardImage={golang}
          cardTitle="Golang"
          cardDescription="I've used Go extensively for that and this and something like that "
        />
        <CardDefault
          cardImage={javascript}
          cardTitle="JavaScript"
          cardDescription="Used JavaScript for creating React Apps and such"
        />
        <CardDouble
          cardImage={tableau}
          cardTitle="Tableau"
          cardDescription="Made some data vizzes!"
          cardImageBig={tableauDash}
        />
        <CardDefault
          cardImage={mysql}
          cardTitle="MySQL"
          cardDescription="I've been working with SQL for such amount of time"
        />
      </div>
    </div>
  );
};

export default ContentBodyTech;

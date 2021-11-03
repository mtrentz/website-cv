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
          cardDescription="I've been programming in Python for years, it's the language I'm most confortable at."
        />
        <CardDefault
          cardImage={golang}
          cardTitle="Golang"
          cardDescription="I've been using Go since the start of 2020. It grew to be one of my favorite tools."
        />
        <CardDefault
          cardImage={javascript}
          cardTitle="JavaScript"
          cardDescription="One of my most recent languages to learn, since it used to do web development."
        />
        <CardDouble
          cardImage={tableau}
          cardTitle="Tableau"
          cardDescription="I love making dashboards with Tableau!"
          cardImageBig={tableauDash}
        />
        <CardDefault
          cardImage={mysql}
          cardTitle="MySQL"
          cardDescription="I've been working daily with SQL for two years now."
        />
      </div>
    </div>
  );
};

export default ContentBodyTech;

import React from "react";
import { useEffect } from "react";
import CardDataViz from "./CardDataViz";
import recuperadores from "../../images/vizzes/recuperadores.png";
import spotify from "../../images/vizzes/spotify.png";
import pe from "../../images/vizzes/pe.png";
import anp from "../../images/vizzes/anp.png";
import balanca from "../../images/vizzes/balanca.png";

const ContentBodyVizzes = ({ linkId, handleMount }) => {
  useEffect(() => {
    handleMount(linkId);
  });

  const vizzesData = [
    {
      id: 1,
      title: "Viz title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!",
      image: recuperadores,
      githubLink: "#",
    },
    {
      id: 2,
      title: "Viz title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!",
      image: spotify,
      githubLink: "#",
    },
    {
      id: 3,
      title: "Viz title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!",
      image: pe,
      githubLink: "#",
    },
    {
      id: 4,
      title: "Viz title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!",
      image: anp,
      githubLink: "#",
    },
    {
      id: 5,
      title: "Viz title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi!",
      image: balanca,
      githubLink: "#",
    },
  ];

  return (
    <>
      <CardDataViz vizzesData={vizzesData} />
    </>
  );
};

export default ContentBodyVizzes;

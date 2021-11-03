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
      title: "Plastic Recyclers",
      description:
        "Location and inauguration date of all plastic recyclers in Brazil.",
      image: recuperadores,
      link: "https://public.tableau.com/views/RecicladoresdePlsticonoBrasil/EstabelecimentosRecuperadores2?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 2,
      title: "My Spotify",
      description:
        "Analysis of my spotify listening habits. Top artists and genres.",
      image: spotify,
      link: "https://public.tableau.com/views/MySpotifyAnalysis/Home?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 3,
      title: "Polyethylene in S.A.",
      description:
        "General data of production, consumption and exports of Polyethylene in South America.",
      image: pe,
      link: "https://public.tableau.com/views/PolyethyleneinSouthAmerica/Capacity?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 4,
      title: "Energy Production",
      description:
        "General data of petroleum and its derivates produced in Brazil.",
      image: anp,
      link: "https://public.tableau.com/views/DadosBrasilEnergia/ProjeoVendadeGasolinaCporestado?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 5,
      title: "Plastic Data",
      description:
        "Brazil's import and export data of the most common plastics.",
      image: balanca,
      link: "https://public.tableau.com/views/BalanaComercialBrasileiraresinas/BalanaComercial?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
  ];

  return (
    <>
      <CardDataViz vizzesData={vizzesData} />
    </>
  );
};

export default ContentBodyVizzes;

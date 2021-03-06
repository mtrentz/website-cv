import React from "react";
import ContentBodyCoding from "./bodies/ContentBodyCoding";
import ContentBodyVizzes from "./bodies/ContentBodyVizzes";
import ContentTitle from "./ContentTitle";
import ContentNavBar from "./ContentNavBar";
import { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const ContentProjects = () => {
  let { path, url } = useRouteMatch();

  const [navbarLinks, setNavbarLinks] = useState([
    {
      id: 1,
      name: "Coding",
      link: `${path}/Coding`,
      selected: false,
    },
    {
      id: 2,
      name: "Data Vizzes",
      link: `${path}/vizzes`,
      selected: false,
    },
  ]);

  const getLinkId = (linkName) => {
    return navbarLinks.find((link) => link.name === linkName).id;
  };

  const handleMount = (id) => {
    // When certain page is mounted, change color of content navbar
    const updatedLinks = navbarLinks.map((link) =>
      link.id === id
        ? { ...link, selected: true }
        : { ...link, selected: false }
    );
    setNavbarLinks(updatedLinks);
  };

  return (
    <div className="bg-terciary flex flex-col h-full w-full text-lg">
      {/* Content Title */}
      <ContentTitle title="Projects" />

      {/* ContentNav */}
      <ContentNavBar navbarLinks={navbarLinks} />

      {/* Content Body */}
      <div className="flex flex-grow items-center justify-center overflow-hidden h-[80%]">
        <Switch>
          <Route exact path={`${path}/coding`}>
            <ContentBodyCoding
              linkId={getLinkId("Coding")}
              handleMount={handleMount}
            />
          </Route>
          <Route exact path={`${path}/vizzes`}>
            <ContentBodyVizzes
              linkId={getLinkId("Data Vizzes")}
              handleMount={handleMount}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ContentProjects;

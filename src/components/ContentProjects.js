import React from "react";
import ContentBodyCoding from "./bodies/ContentBodyCoding";
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
      link: `${path}/viz`,
      selected: false,
    },
    {
      id: 3,
      name: "Others",
      link: `${path}/Others`,
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
    <div className="bg-terciary flex flex-col h-full w-full">
      {/* Content Title */}
      <ContentTitle title="Projects" />

      {/* ContentNav */}
      <ContentNavBar navbarLinks={navbarLinks} />

      {/* Content Body */}
      <div className="flex flex-grow items-center justify-center">
        <Switch>
          <Route exact path={`${path}/coding`}>
            <ContentBodyCoding
              linkId={getLinkId("Coding")}
              handleMount={handleMount}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ContentProjects;
